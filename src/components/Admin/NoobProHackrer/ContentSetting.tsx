import { ChangeEvent, Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";
import { useQuery } from "react-query";

import { contentInfoState } from "@/store/noobprohacker";
import Input from "@/components/common/Input";
import { medium } from "@/app/layout";
import { getLastestNoobProHacker } from "@/api/client/noobprohacker";
import { NoobProHacker } from "@/domains/noobprohacker";

type Props = {
  moveToNextPage: () => void;
};

export default function ContentSetting(props: Props) {
  const { moveToNextPage } = props;
  const [contentInfo, setContentInfo] = useRecoilState(contentInfoState);

  const { data } = useQuery<NoobProHacker[]>(
    ["getLastestNoobProHacker"],
    getLastestNoobProHacker,
  );

  useEffect(() => {
    if (!data) return;

    setContentInfo((prev) => ({
      ...prev,
      episode: data[0].contentInfo.episode + 1,
    }));
  }, [data]);

  if (!data) return <div className="mt-16 text-text-primary">loading...</div>;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "episode") {
      setContentInfo(
        produce((draft) => {
          draft["episode"] = parseInt(e.target.value);
        }),
      );

      return;
    }

    setContentInfo(
      produce((draft) => {
        draft[e.target.name as "main_subject" | "date" | "youtube_url"] = e
          .target.value as string;
      }),
    );
  };

  return (
    <Fragment>
      <h2 className={`${medium.className} mt-16 text-2xl text-text-primary`}>
        컨텐츠 정보
      </h2>
      <div className="mt-8 flex gap-8 ">
        <div className="flex flex-col gap-2 [&>input]:h-[40px] [&>input]:w-[48px]">
          <label className="text-lg text-text-secondary">회차</label>
          <Input
            name="episode"
            type="number"
            value={contentInfo.episode}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2 [&>input]:h-[40px] [&>input]:w-[150px]">
          <label className="text-lg text-text-secondary">메인 주제</label>
          <Input
            name="main_subject"
            type="text"
            value={contentInfo.main_subject}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2 [&>input]:h-[40px]">
          <label className="text-lg text-text-secondary">날짜</label>
          <Input
            name="date"
            type="date"
            value={contentInfo.date}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2 [&>input]:h-[40px]">
          <label className="text-lg text-text-secondary">유튜브 링크</label>
          <Input
            name="youtube_url"
            type="text"
            value={contentInfo.youtube_url}
            handleInputChange={handleInputChange}
          />
        </div>
        <button
          onClick={() => moveToNextPage()}
          className=" border-2 border-background-tertiary px-6 py-2 text-text-tertiary"
        >
          제출
        </button>
      </div>
    </Fragment>
  );
}
