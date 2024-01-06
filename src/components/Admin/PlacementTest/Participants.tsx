"use client";

import Image from "next/image";

import { useParticipants } from "@/hooks/Admin/PlacementTest/useParticipants";
import { tierArray } from "@/domains/architect";
import { renameToWebp } from "@/domains/noobprohacker";
import SelectBox from "@/components/common/SelectBox/SelectBox";
import FormField from "@/components/common/Form/FormField";
import Input from "@/components/common/Input/Input";

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
            <FormField label="순서">
              <Input
                name="order"
                type="number"
                value={participant.order}
                handleInputChange={(e) => handleInputChange(e, index)}
              />
            </FormField>
            <FormField label="배치 티어">
              <SelectBox
                value={participant.placement_result}
                handleSelectChange={(e) => handleSelectChange(e, index)}
                options={tierArray}
                width="150px"
                height="40px"
              />
            </FormField>
          </div>
        </div>
      ))}
    </div>
  );
}
