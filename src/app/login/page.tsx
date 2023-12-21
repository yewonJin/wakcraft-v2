"use client";

import useLogin from "@/hooks/useLogin";
import { medium } from "../layout";

export default function Page() {
  const { input, mutation, handleInputChange } = useLogin();

  return (
    <div className="mx-auto flex max-w-[1200px] justify-center pt-40">
      <title>왁크래프트 | 로그인</title>
      <div className="flex-col items-center sm:bg-background-secondary sm:p-20">
        <h2 className={`text-3xl text-text-primary ${medium.className}`}>
          로그인
        </h2>
        <form
          className="mt-8 flex w-[300px] flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
        >
          <input
            autoComplete="on"
            value={input.id}
            id="id"
            name="id"
            onChange={handleInputChange}
            className="h-[48px] rounded-md border-2 border-background-tertiary bg-background-primary pl-3 text-text-secondary outline-none"
            placeholder="아이디"
          ></input>
          <input
            autoComplete="on"
            value={input.password}
            id="password"
            name="password"
            onChange={handleInputChange}
            type="password"
            className="h-[48px] rounded-md border-2 border-background-tertiary bg-background-primary pl-3 text-text-secondary outline-none"
            placeholder="비밀번호"
          ></input>
          <button className="rounded-md bg-background-tertiary py-3 text-text-primary">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
