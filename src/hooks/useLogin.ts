import { useRouter } from "next/navigation";
import { produce } from "immer";
import { useState, ChangeEvent } from "react";
import { useMutation } from "react-query";

import { login } from "@/api/client/login";

const useLogin = () => {
  const [status, setStatus] = useState("");
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
        setStatus("로그인 성공");

        setTimeout(() => {
          setStatus("");
        }, 1500);

        router.push("/admin");
      },
      onError(err: string) {
        setStatus(err);

        setTimeout(() => {
          setStatus("");
        }, 2500);
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

  return { status, input, mutation, handleInputChange };
};

export default useLogin;
