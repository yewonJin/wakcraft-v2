"use client";

import { KeyboardEvent, useState } from "react";

import { medium } from "@/app/layout";
import Button from "@/components/common/Button/Button";
import FormField from "@/components/common/Form/FormField";
import Input from "@/components/common/Input/Input";
import useSearch from "@/hooks/useSearch";
import { useMutation, useQuery } from "react-query";
import { Architect } from "@/domains/architect";
import { getAllArchitects } from "@/api/client/architect";
import SearchResult from "@/components/Game/WhoseWork/SearchResult";
import { updatePlacementTestLink } from "@/api/client/placementTest";
import toast from "react-hot-toast";

export type PlacementCafeInfo = {
  minecraft_id: string;
  cafeLink: string;
};

export default function Page() {
  const { data: architects } = useQuery<Architect[]>(
    ["getAllArchitects"],
    getAllArchitects,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  const {
    input: searchInput,
    setInput: setSearchInput,
    highlightedArchitects,
  } = useSearch(architects || []);

  const [arr, setArr] = useState<PlacementCafeInfo[]>([]);
  const [curCafeLink, setCurCafeLink] = useState<string>("");

  const mutation = useMutation(
    ["updatePlacementTestLink"],
    () => updatePlacementTestLink(arr),
    {
      onSuccess() {
        toast.success("수정 성공");
      },
    },
  );

  if (!highlightedArchitects) return <div>loading...</div>;

  return (
    <div>
      <h2 className={`${medium.className} text-3xl text-text-primary`}>
        배치고사 링크 추가
      </h2>
      <div className="mt-16 flex gap-16">
        <div className="w-[200px]">
          {arr.map((item) => (
            <p className="text-text-secondary" key={item.minecraft_id}>
              {item.minecraft_id}
            </p>
          ))}
          <Button
            handleButtonClick={() => {
              setArr([]);
              mutation.mutate();
            }}
            value="추가"
          />
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
                handleInputChange={(e) => setCurCafeLink(e.target.value)}
              />
            </FormField>
          </div>
          <Button
            width="80px"
            value="추가"
            handleButtonClick={() => {
              setArr((prev) => [
                ...prev,
                {
                  minecraft_id: highlightedArchitects[0].minecraft_id,
                  cafeLink: curCafeLink,
                },
              ]);
              setSearchInput("");
              setCurCafeLink("");
            }}
          />
        </div>
      </div>
    </div>
  );
}
