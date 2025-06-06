import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { addArchitect } from "@/api/client/architect";

type Input = {
  minecraft_id: string;
  wakzoo_id: string;
};

export const useAddArchitect = () => {
  const [input, setInput] = useState<Input>({
    minecraft_id: "",
    wakzoo_id: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(["addArchitect"], () => addArchitect(input), {
    onSuccess() {
      toast.success("추가 성공");
      queryClient.invalidateQueries(["getAllArchitects"]);
    },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (input.minecraft_id === "" || input.wakzoo_id === "") {
      toast.error("아이디를 입력해주세요");
      return;
    }

    mutation.mutate();

    setInput({ minecraft_id: "", wakzoo_id: "" });
  };

  return { input, handleInputChange, handleButtonClick };
};
