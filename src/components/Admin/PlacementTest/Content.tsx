"use client";

import { useContent } from "@/hooks/Admin/PlacementTest/useContent";
import Input from "@/components/common/Input/Input";

type Props = {
  curSeason: number;
};

export default function Content(props: Props) {
  const { placementTest, handleInputChange, handleSubmit } = useContent(
    props.curSeason,
  );

  return (
    <div className="flex items-end gap-8">
      <div className="mt-8 flex flex-col gap-2">
        <p className="text-lg text-text-secondary">시즌</p>
        <span className="rounded-md bg-background-secondary p-1 text-center text-xl text-text-primary">
          {placementTest.season}
        </span>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <p className="text-lg text-text-secondary">날짜</p>
        <div className="[&>input]:h-[40px] [&>input]:w-[135px]">
          <Input
            type="date"
            name="date"
            handleInputChange={handleInputChange}
            value={placementTest.date}
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <p className="text-lg text-text-secondary">유튜브 링크</p>
        <div className="[&>input]:h-[40px] [&>input]:w-[250px]">
          <Input
            type="text"
            name="youtube_url"
            handleInputChange={handleInputChange}
            value={placementTest.youtube_url}
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="border-2 border-background-secondary px-3 py-2 text-lg text-text-secondary"
      >
        추가
      </button>
    </div>
  );
}
