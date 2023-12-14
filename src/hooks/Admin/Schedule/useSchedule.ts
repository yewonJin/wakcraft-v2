import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { produce } from "immer";

import { getAllArchitects } from "@/api/client/architect";
import { Architect } from "@/domains/architect";
import { Schedule, scheduleObject } from "@/domains/schedule";
import useSearch from "@/hooks/useSearch";
import { addSchedule } from "@/api/client/schedule";
import toast from "react-hot-toast";

export const useSchedule = () => {
  const [schedule, setSchedule] = useState<Schedule>(scheduleObject);

  const { data: architects } = useQuery<Architect[]>(
    ["getAllArchitects"],
    getAllArchitects,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  const queryClient = useQueryClient();

  const addMutation = useMutation(
    ["addSchedule"],
    () => addSchedule(schedule),
    {
      onSuccess() {
        toast.success("추가 성공");
      },
    },
  );

  const {
    input: searchInput,
    setInput: setSearchInput,
    highlightedArchitects,
  } = useSearch(architects || []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "epsidoe" ? parseInt(e.target.value) : e.target.value;

    setSchedule((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSchedule((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (searchInput === "") return;

    if (e.key !== "Enter") return;

    addParticipant(highlightedArchitects[0].minecraft_id);
    setSearchInput("");
  };

  const addParticipant = (participant: string) => {
    setSchedule(
      produce((draft) => {
        draft.participants.push(participant);
      }),
    );
  };

  const removeParticipant = (index: number) => {
    setSchedule(
      produce((draft) => {
        draft.participants.splice(index, 1);
      }),
    );
  };

  return {
    schedule,
    searchInput,
    highlightedArchitects,
    setSearchInput,
    handleInputChange,
    handleSelectChange,
    handleKeyDown,
    removeParticipant,
    addMutation,
  };
};
