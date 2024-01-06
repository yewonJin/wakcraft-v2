import FormField from "@/components/common/Form/FormField";
import Input from "@/components/common/Input/Input";
import { ChangeEvent, Fragment } from "react";

type Props = {
  moveToNextPage: () => void;
  contentInfo: ContentInfo;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type ContentInfo = {
  episode: number;
  main_subject: string;
  date: string;
  youtube_url: string;
};

export default function ContentSetting(props: Props) {
  const { moveToNextPage, contentInfo, handleInputChange } = props;

  return (
    <Fragment>
      <div className="mt-12 flex gap-8 ">
        <FormField label="회차">
          <Input
            name="episode"
            type="number"
            value={contentInfo.episode}
            handleInputChange={handleInputChange}
          />
        </FormField>
        <FormField label="메인 주제">
          <Input
            name="main_subject"
            type="text"
            value={contentInfo.main_subject}
            handleInputChange={handleInputChange}
            width="150px"
          />
        </FormField>
        <FormField label="날짜">
          <Input
            name="date"
            type="date"
            value={contentInfo.date}
            handleInputChange={handleInputChange}
            width="150px"
          />
        </FormField>
        <FormField label="유튜브 링크">
          <Input
            name="youtube_url"
            type="text"
            value={contentInfo.youtube_url}
            handleInputChange={handleInputChange}
            width="150px"
          />
        </FormField>
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
