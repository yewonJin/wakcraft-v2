"use client";

import Image from "next/image";

import { useParticipants } from "@/hooks/Admin/PlacementTest/useParticipants";
import Input from "@/components/common/Input";
import { tierArray } from "@/domains/architect";
import { renameToWebp } from "@/domains/noobprohacker";

type Props = {
  imagesName: string[];
};

export default function Participants(props: Props) {
  const { placementTest, handleInputChange, handleSelectChange } =
    useParticipants(props.imagesName);

  return (
    <div className="mt-12 grid grid-cols-3 gap-8">
      {placementTest.participants.map((participant, index) => (
        <div key={participant.minecraft_id}>
          <div className="relative aspect-video">
            <Image
              alt="배치고사 이미지"
              fill
              src={renameToWebp(participant.image_url)}
              sizes="400px"
            />
            <span className="absolute left-2 top-2 z-10 bg-[rgba(0,0,0,0.8)] px-2 py-1 text-[white]">
              {participant.minecraft_id}
            </span>
          </div>
          <div className="mt-4 flex gap-8">
            <div className="flex flex-col gap-2 [&>input]:h-[40px] [&>input]:w-[48px]">
              <p className="text-text-secondary">순서</p>
              <Input
                name="order"
                type="number"
                value={participant.order}
                handleInputChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-text-secondary">배치 티어</p>
              <select
                value={participant.placement_result}
                onChange={(e) => handleSelectChange(e, index)}
                className="h-[40px] w-[150px] rounded-md border-2 border-background-tertiary bg-background-primary pl-2 text-text-secondary outline-none"
              >
                {tierArray.map((tier) => (
                  <option
                    className="bg-background-primary hover:cursor-pointer"
                    value={tier}
                    key={tier}
                  >
                    {tier}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
