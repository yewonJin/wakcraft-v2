"use client";

import { useContent } from "@/hooks/Admin/PlacementTest/useContent";
import FormField from "@/components/common/Form/FormField";
import Input from "@/components/common/Input/Input";

type Props = {
  curSeason: number;
};

export default function Content(props: Props) {
  const { placementTest, handleInputChange, handleSubmit } = useContent(
    props.curSeason,
  );

  return (
    <div className="mt-8 flex gap-8 ">
      <div className="flex flex-col gap-4">
        <p className="text-text-secondary">시즌</p>
        <span className="rounded-md text-center text-xl text-text-primary">
          {placementTest.season}
        </span>
      </div>
      <FormField label="날짜">
        <Input
          type="date"
          name="date"
          handleInputChange={handleInputChange}
          value={placementTest.date}
          height="40px"
          width="135px"
        />
      </FormField>
      <FormField label="유튜브 링크">
        <Input
          type="text"
          name="youtube_url"
          handleInputChange={handleInputChange}
          value={placementTest.youtube_url}
          height="40px"
          width="250px"
        />
      </FormField>
      <button
        onClick={handleSubmit}
        className="border-2 border-background-secondary px-3 py-2 text-lg text-text-secondary"
      >
        추가
      </button>
    </div>
  );
}
