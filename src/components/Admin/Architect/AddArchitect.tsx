"use client";

import { Fragment } from "react";

import { medium } from "@/app/layout";
import { useAddArchitect } from "@/hooks/Admin/Architect/useAddArchitect";

export default function AddArchitect() {
  const { input, handleInputChange, handleButtonClick } = useAddArchitect();

  return (
    <Fragment>
      <h2 className={`text-3xl ${medium.className} text-text-primary`}>
        건축가 추가
      </h2>
      <div className="flex flex-col gap-4 pt-8">
        <div className="flex flex-col gap-2 text-text-secondary">
          <p>마인크래프트 아이디</p>
          <input
            name="minecraft_id"
            value={input.minecraft_id}
            onChange={handleInputChange}
            className="h-[40px] w-[200px] rounded-md border-2 border-background-tertiary bg-background-primary pl-3"
          />
        </div>
        <div className="flex flex-col gap-2 text-text-secondary">
          <p>왁물원 아이디</p>
          <input
            name="wakzoo_id"
            value={input.wakzoo_id}
            onChange={handleInputChange}
            className="h-[40px] w-[200px] rounded-md border-2 border-background-tertiary bg-background-primary pl-3"
          />
        </div>
        <button
          onClick={handleButtonClick}
          className="mt-2 w-full rounded-md bg-background-tertiary px-3 py-2 text-text-primary hover:bg-text-tertiary"
        >
          추가
        </button>
      </div>
    </Fragment>
  );
}
