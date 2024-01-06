import { Dispatch, Fragment, SetStateAction } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";

import { NoobProHacker } from "@/domains/noobprohacker";
import { contentInfoState, lineInfoState } from "@/store/noobprohacker";
import Input from "@/components/common/Input/Input";
import { getArchitectureNoobProHackersWithoutURL } from "@/api/client/architectureNoobProHacker";
import LineSetting from "../Common/LineSetting";
import { useLineSetting } from "@/hooks/Admin/ArchitectureNoobProHacker/useLineSetting";

type Props = {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
};

export default function EditArchitectureNoobProHacker(props: Props) {
  const [contentInfo, setContetInfo] = useRecoilState(contentInfoState);
  const [lineInfo, setLineInfo] = useRecoilState(lineInfoState);

  const { handleSubmit } = useLineSetting(props);

  const { data: architectureNoobProHackersWithoutURL } = useQuery<
    NoobProHacker[]
  >(
    ["getArchitectureNoobProHackersWithoutURL"],
    getArchitectureNoobProHackersWithoutURL,
  );

  if (!architectureNoobProHackersWithoutURL)
    return <div className="mt-8 text-text-primary">loading...</div>;

  return (
    <Fragment>
      <div className="mt-8">
        <select
          defaultValue={-1}
          onChange={(e) => {
            if (parseInt(e.target.value) === -1) return;

            const noobprohacker = architectureNoobProHackersWithoutURL.filter(
              (item) => item.contentInfo.episode === parseInt(e.target.value),
            );

            setContetInfo(noobprohacker[0].contentInfo);
            setLineInfo(noobprohacker[0].lineInfo);

            props.setIsEdit(true);
          }}
          className="h-[40px] w-[200px] rounded-md border-2 border-background-tertiary bg-background-primary px-2 text-text-secondary outline-none"
        >
          <option value={-1}>에피소드 선택</option>
          {architectureNoobProHackersWithoutURL.map((noobprohacker) => (
            <option
              key={noobprohacker.contentInfo.episode}
              value={noobprohacker.contentInfo.episode}
            >
              {`${noobprohacker.contentInfo.episode}화 : 
            ${noobprohacker.contentInfo.main_subject}편`}
            </option>
          ))}
        </select>
      </div>
      {props.isEdit && (
        <div className="mt-8">
          <p className="mb-2 text-lg text-text-primary">유튜브 링크</p>
          <Input
            name="youtube_url"
            type="text"
            value={contentInfo.youtube_url}
            handleInputChange={(e) =>
              setContetInfo((prev) => ({
                ...prev,
                youtube_url: e.target.value,
              }))
            }
          />
          <LineSetting isEdit lineInfo={lineInfo} handleSubmit={handleSubmit} />
        </div>
      )}
    </Fragment>
  );
}
