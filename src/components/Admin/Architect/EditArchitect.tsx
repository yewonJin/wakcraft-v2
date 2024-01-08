"use client";

import { KeyboardEvent } from "react";

import { medium } from "@/app/layout";
import SearchResult from "@/components/Game/WhoseWork/SearchResult";
import Input from "@/components/common/Input/Input";
import SelectBox from "@/components/common/SelectBox/SelectBox";
import FormField from "@/components/common/Form/FormField";
import { tierArray } from "@/domains/architect";
import { useEditArchitect } from "@/hooks/Admin/Architect/useEditArchitect";
import Button from "@/components/common/Button/Button";

export default function EditArchitect() {
  const {
    searchInput,
    setSearchInput,
    highlightedArchitects,
    input,
    architect,
    handleInputChange,
    handleSelectChange,
    mutation,
  } = useEditArchitect();

  if (!highlightedArchitects) return <div>loading...</div>;

  return (
    <div>
      <h2 className={`text-3xl ${medium.className} text-text-primary`}>
        건축가 수정
      </h2>
      <div className="flex flex-col gap-8 pt-8 md:flex-row">
        <div className="">
          <p className="mb-2 text-text-secondary">아이디 검색</p>
          <Input
            name="searchArchitect"
            type="text"
            handleInputChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Tab") {
                setSearchInput(highlightedArchitects[0].wakzoo_id);
              }
            }}
          />
          <div className="relative w-[250px]">
            <SearchResult
              input={searchInput}
              setInput={setSearchInput}
              highlightedArchitects={highlightedArchitects}
            />
          </div>
        </div>
        {input && (
          <div className="">
            <div className="flex flex-col gap-2 text-text-secondary">
              <p>이전 마인크래프트 아이디</p>
              <p className="flex h-[40px] w-[200px] items-center rounded-md border-2 border-background-tertiary bg-background-secondary pl-3">
                {architect?.minecraft_id}
              </p>
            </div>
            <div className="mb-4 mt-8 flex flex-col gap-4">
              <FormField label="바꿀 마인크래프트 아이디">
                <Input
                  name="minecraft_id"
                  value={input.minecraft_id}
                  type="text"
                  handleInputChange={handleInputChange}
                />
              </FormField>
              <FormField label="바꿀 왁물원 아이디">
                <Input
                  name="wakzoo_id"
                  value={input.wakzoo_id}
                  type="text"
                  handleInputChange={handleInputChange}
                />
              </FormField>
              <FormField label="티어">
                <SelectBox
                  value={input.tier}
                  options={tierArray}
                  handleSelectChange={handleSelectChange}
                  height="40px"
                />
              </FormField>
            </div>
            <Button
              handleButtonClick={() => {
                if (!architect) return;

                mutation.mutate();
              }}
              value="변경"
              width="100%"
            />
          </div>
        )}
      </div>
    </div>
  );
}
