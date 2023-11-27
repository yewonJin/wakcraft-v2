"use client";

import { Fragment } from "react";

import { medium } from "@/app/layout";
import SearchResult from "@/components/Game/WhoseWork/SearchResult";
import { tierArray } from "@/domains/architect";
import { useEditArchitect } from "@/hooks/Admin/Architect/useEditArchitect";

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
    <Fragment>
      <h2 className={`text-3xl ${medium.className} text-text-primary`}>
        건축가 수정
      </h2>
      <div className="flex gap-8 pt-8">
        <div className="">
          <p className="mb-2 text-text-primary">아이디 검색</p>
          <input
            className="h-[40px] w-[250px] rounded-md border-2 border-background-tertiary bg-background-primary pl-3 text-text-secondary outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
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
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2 text-text-secondary">
                <p>바꿀 마인크래프트 아이디</p>
                <input
                  className="h-[40px] w-[200px] rounded-md border-2 border-background-tertiary bg-background-primary pl-3"
                  name="minecraft_id"
                  onChange={handleInputChange}
                  value={input.minecraft_id}
                />
              </div>
              <div className="flex flex-col gap-2 text-text-secondary">
                <p>왁물원 아이디</p>
                <input
                  name="wakzoo_id"
                  onChange={handleInputChange}
                  className="h-[40px] w-[200px] rounded-md border-2 border-background-tertiary bg-background-primary pl-3"
                  value={input.wakzoo_id}
                />
              </div>
              <div className="flex flex-col gap-2 text-text-secondary">
                <p>티어</p>
                <select
                  value={input.tier}
                  onChange={handleSelectChange}
                  className="h-[40px] w-[200px] rounded-md border-2 border-background-tertiary bg-background-primary pl-2 text-text-secondary outline-none"
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
            <button
              onClick={() => {
                if (!architect) return;

                mutation.mutate();
              }}
              className="mt-6 w-full rounded-md bg-background-tertiary px-3 py-2 text-text-primary hover:bg-text-tertiary"
            >
              변경
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}
