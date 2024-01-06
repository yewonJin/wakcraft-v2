"use client";

import { medium } from "@/app/layout";
import InputField from "@/components/common/Input/InputField";
import { useAddArchitect } from "@/hooks/Admin/Architect/useAddArchitect";

export default function AddArchitect() {
  const { input, handleInputChange, handleButtonClick } = useAddArchitect();

  return (
    <div className="">
      <h2 className={`text-3xl ${medium.className} text-text-primary`}>
        건축가 추가
      </h2>
      <div className="flex flex-col gap-4 pt-8">
        <InputField
          label="마인크래프트 아이디"
          name="minecraft_id"
          value={input.minecraft_id}
          type="text"
          handleInputChange={handleInputChange}
        />
        <InputField
          label="왁물원 아이디"
          name="wakzoo_id"
          value={input.wakzoo_id}
          type="text"
          handleInputChange={handleInputChange}
        />
        <button
          onClick={handleButtonClick}
          className="mt-2 w-full rounded-md bg-background-tertiary px-3 py-2 text-text-primary hover:bg-text-tertiary"
        >
          추가
        </button>
      </div>
    </div>
  );
}
