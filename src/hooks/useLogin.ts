import { useRouter } from "next/navigation";
import { produce } from "immer";
import { useState, ChangeEvent } from "react";
import { useMutation } from "react-query";

import { login } from "@/api/client/login";
import toast from "react-hot-toast";

const useLogin = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    id: "",
    password: "",
  });

  const mutation = useMutation(
    ["login"],
    () => login(input.id, input.password),
    {
      onSuccess() {
        toast.success("로그인 성공");

        router.push("/admin");
      },
    },
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const keys = e.target.name as "id" | "password";

    setInput(
      produce((draft) => {
        draft[keys] = e.target.value;
      }),
    );
  };

  return { input, mutation, handleInputChange };
};

export default useLogin;
