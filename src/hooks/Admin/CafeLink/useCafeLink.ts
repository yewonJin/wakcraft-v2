import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";

import { Architect } from "@/domains/architect";
import { getAllArchitects, updateCafeLink } from "@/api/client/architect";
import useSearch from "@/hooks/useSearch";

export const useCafeLink = () => {
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

  const [cafeInfo, setCafeInfo] = useState<CafeInfo[]>([]);
  const [curCafeLink, setCurCafeLink] = useState<string>("");

  const mutation = useMutation(
    ["updateCafeLink"],
    () => updateCafeLink(cafeInfo),
    {
      onSuccess() {
        toast.success("수정 성공");
      },
    },
  );

  const handleCafeLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurCafeLink(e.target.value);
  };

  const addToCafeInfo = () => {
    setCafeInfo((prev) => [
      ...prev,
      {
        minecraft_id: highlightedArchitects[0].minecraft_id,
        cafeLink: curCafeLink,
      },
    ]);
    setSearchInput("");
    setCurCafeLink("");
  };

  const submit = () => {
    setCafeInfo([]);
    mutation.mutate();
  };

  return {
    searchInput,
    setSearchInput,
    highlightedArchitects,
    mutation,
    cafeInfo,
    curCafeLink,
    addToCafeInfo,
    handleCafeLinkChange,
    submit,
  };
};

export type CafeInfo = {
  minecraft_id: string;
  cafeLink: string;
};
