import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { produce } from "immer";
import toast from "react-hot-toast";

import { getAllArchitects } from "@/api/client/architect";
import { Architect } from "@/domains/architect";
import { Schedule, scheduleObject } from "@/domains/schedule";
import useSearch from "@/hooks/useSearch";
import {
  addSchedule,
  editSchedule,
  getAllSchedules,
} from "@/api/client/schedule";

export const useSchedule = () => {
  const [scheduleForm, setScheduleForm] = useState<Schedule>(scheduleObject);

  const [isEdit, setIsEdit] = useState(false);

  const { data: architects } = useQuery<Architect[]>(
    ["getAllArchitects"],
    getAllArchitects,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  const { data: schedules } = useQuery<Schedule[]>(
    ["getAllSchedules"],
    getAllSchedules,
  );

  const queryClient = useQueryClient();

  const addMutation = useMutation(
    ["addSchedule"],
    () => addSchedule(scheduleForm),
    {
      onSuccess() {
        toast.success("추가 성공");
        queryClient.invalidateQueries(["getAllSchedules"]);
      },
    },
  );

  const editMutation = useMutation(
    ["editSchedule"],
    () => editSchedule(scheduleForm),
    {
      onSuccess() {
        toast.success("수정 성공");
        queryClient.invalidateQueries(["getAllSchedules"]);
      },
    },
  );

  const {
    input: searchInput,
    setInput: setSearchInput,
    highlightedArchitects,
  } = useSearch(architects || []);

  const handleEditClick = (index: number) => {
    if (!schedules) return;

    setScheduleForm(schedules[index]);

    setIsEdit(true);
  };

  const handleSubmit = () => {
    if (isEdit) {
      editMutation.mutate();
      setIsEdit(false);
      setScheduleForm(scheduleObject);
      return;
    }

    addMutation.mutate();

    setScheduleForm(scheduleObject);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "epsidoe" ? parseInt(e.target.value) : e.target.value;

    setScheduleForm((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === "isTributeContent") {
      setScheduleForm((prev) => ({
        ...prev,
        isTributeContent: e.target.value === "true" ? true : false,
      }));
      return;
    }

    setScheduleForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (searchInput === "") return;

    if (e.key !== "Enter") return;

    addParticipant(highlightedArchitects[0].minecraft_id);
    setSearchInput("");
  };

  const addParticipant = (participant: string) => {
    setScheduleForm(
      produce((draft) => {
        draft.participants.push(participant);
      }),
    );
  };

  const removeParticipant = (index: number) => {
    setScheduleForm(
      produce((draft) => {
        draft.participants.splice(index, 1);
      }),
    );
  };

  return {
    isEdit,
    scheduleForm,
    schedules,
    searchInput,
    highlightedArchitects,
    setSearchInput,
    handleInputChange,
    handleSelectChange,
    handleKeyDown,
    handleEditClick,
    handleSubmit,
    removeParticipant,
  };
};
