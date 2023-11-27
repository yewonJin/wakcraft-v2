import { Fragment } from "react";

import { useContentSetting } from "@/hooks/Admin/NoobProHacker/useContentSetting";
import Input from "@/components/common/Input";

type Props = {
  moveToNextPage: () => void;
};

export default function ContentSetting(props: Props) {
  const { moveToNextPage } = props;
  const { contentInfo, data, handleInputChange } = useContentSetting();

  if (!data) return <div className="mt-16 text-text-primary">loading...</div>;

  return (
    <Fragment>
      <div className="mt-16 flex gap-8 ">
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
