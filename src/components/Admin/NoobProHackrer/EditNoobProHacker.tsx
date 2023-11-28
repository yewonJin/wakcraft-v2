import { useQuery } from "react-query";

import { getNoobProHackersWithoutURL } from "@/api/client/noobprohacker";
import { NoobProHacker } from "@/domains/noobprohacker";
import { Dispatch, Fragment, SetStateAction } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { contentInfoState, lineInfoState } from "@/store/noobprohacker";
import LineSetting from "./LineSetting/LineSetting";
import Input from "@/components/common/Input";

type Props = {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
};

export default function EditNoobProHacker(props: Props) {
  const [contentInfo, setContetInfo] = useRecoilState(contentInfoState);
  const setLineInfo = useSetRecoilState(lineInfoState);

  const { data: noobprohackersWithoutURL } = useQuery<NoobProHacker[]>(
    ["getNoobProHackersWithoutURL"],
    getNoobProHackersWithoutURL,
  );

  if (!noobprohackersWithoutURL)
    return <div className="mt-8 text-text-primary">loading...</div>;

  return (
    <Fragment>
      <div className="mt-8">
        <select
          defaultValue={-1}
          onChange={(e) => {
            if (parseInt(e.target.value) === -1) return;

            const noobprohacker = noobprohackersWithoutURL.filter(
              (item) => item.contentInfo.episode === parseInt(e.target.value),
            );

            setContetInfo(noobprohacker[0].contentInfo);
            setLineInfo(noobprohacker[0].lineInfo);

            props.setIsEdit(true);
          }}
          className="h-[40px] w-[200px] rounded-md border-2 border-background-tertiary bg-background-primary px-2 text-text-secondary outline-none"
        >
          <option value={-1}>에피소드 선택</option>
          {noobprohackersWithoutURL.map((noobprohacker) => (
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
          <div className="[&>input]:h-[40px]">
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
          </div>
          <LineSetting isEdit />
        </div>
      )}
    </Fragment>
  );
}
