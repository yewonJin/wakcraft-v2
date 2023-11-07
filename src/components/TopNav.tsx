"use client";

import LightMode from "../../public/light_mode.svg";
import DarkMode from "../../public/dark_mode.svg";
import useTheme from "@/hooks/useTheme";

export default function TopNav() {
  const { handleModeClick } = useTheme();

  return (
    <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between">
      <h1 className=" text-2xl font-semibold text-text-primary">WAKCRAFT</h1>
      <div className="flex items-center">
        <span
          className="flex fill-text-secondary hover:cursor-pointer hover:fill-text-primary [&>*:first-child]:dark:hidden [&>*:last-child]:hidden [&>*:last-child]:dark:block"
          onClick={handleModeClick}
        >
          <LightMode />
          <DarkMode />
        </span>
      </div>
    </nav>
  );
}
