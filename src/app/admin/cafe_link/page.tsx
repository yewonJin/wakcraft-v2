"use client";

import { KeyboardEvent } from "react";

import Button from "@/components/common/Button/Button";
import FormField from "@/components/common/Form/FormField";
import Input from "@/components/common/Input/Input";
import SearchResult from "@/components/Game/WhoseWork/SearchResult";
import PageTitle from "@/components/common/PageTitle";

import { useCafeLink } from "@/hooks/Admin/CafeLink/useCafeLink";

export default function Page() {
  const {
    searchInput,
    setSearchInput,
    highlightedArchitects,
    cafeInfo,
    curCafeLink,
    addToCafeInfo,
    submit,
    handleCafeLinkChange,
  } = useCafeLink();

  if (!highlightedArchitects) return <div>loading...</div>;

  return (
    <div>
      <PageTitle
        title="카페 링크"
        content="건축가 세부 페이지에 카페 링크를 추가한다."
      />
      <div className="mt-16 flex gap-16">
        <div className="w-[200px]">
          {cafeInfo.map((item) => (
            <p className="text-text-secondary" key={item.minecraft_id}>
              {item.minecraft_id}
            </p>
          ))}
          <Button handleButtonClick={submit} value="추가" />
        </div>
        <div className="flex w-[600px] gap-8">
          <div className="relative">
            <FormField label="건축가 마크 아이디">
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
            </FormField>
          </div>
          <div className="w-[400px]">
            <FormField label="네이버 카페 링크">
              <Input
                name="placementTest_link"
                type="text"
                value={curCafeLink}
                handleInputChange={handleCafeLinkChange}
              />
            </FormField>
          </div>
          <Button width="80px" value="추가" handleButtonClick={addToCafeInfo} />
        </div>
      </div>
    </div>
  );
}
