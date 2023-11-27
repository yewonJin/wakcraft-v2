import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";

import {
  getAllArchitects,
  getArchitectByMinecraftId,
  updateArchitect,
} from "@/api/client/architect";
import { Architect, Tier } from "@/domains/architect";
import useSearch from "../../useSearch";

type Input = {
  minecraft_id: string;
  wakzoo_id: string;
  tier: Tier;
};

export const useEditArchitect = () => {
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

  const isExistedArchitect =
    !!searchInput &&
    (searchInput === highlightedArchitects[0]?.wakzoo_id ||
      searchInput === highlightedArchitects[0]?.minecraft_id);

  const { data: architect } = useQuery<Architect>(
    ["getArchitect", highlightedArchitects[0]?.minecraft_id],
    () => getArchitectByMinecraftId(highlightedArchitects[0]?.minecraft_id),
    {
      enabled: !!isExistedArchitect,
      suspense: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  const mutation = useMutation(
    ["updateArchitect"],
    () =>
      updateArchitect({
        beforeId: architect?.minecraft_id || "",
        afterId: input.minecraft_id,
        wakzoo_id: input.wakzoo_id,
        curTier: input.tier,
      }),

    {
      onSuccess() {
        toast.success("변경 성공");
      },
    },
  );

  const [input, setInput] = useState<Input>({
    minecraft_id: "",
    wakzoo_id: "",
    tier: "언랭",
  });

  useEffect(() => {
    if (!architect) return;

    setInput((prev) => ({
      ...prev,
      minecraft_id: architect.minecraft_id,
      wakzoo_id: architect.wakzoo_id,
      tier: architect.curTier,
    }));
  }, [architect]);

  useEffect(() => {
    if (searchInput !== "") return;

    setInput((prev) => ({
      ...prev,
      minecraft_id: "",
      wakzoo_id: "",
      tier: "언랭",
    }));
  }, [searchInput]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInput((prev) => ({ ...prev, tier: e.target.value as Tier }));
  };

  return {
    searchInput,
    setSearchInput,
    highlightedArchitects,
    architect,
    input,
    handleInputChange,
    handleSelectChange,
    mutation,
  };
};
