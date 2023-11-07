"use client";

import LightMode from "../../public/light_mode.svg";
import DarkMode from "../../public/dark_mode.svg";
import useTheme from "@/hooks/useTheme";

export default function TopNav() {
  const { scrollY, isScrolled, handleModeClick } = useTheme();

  return (
    <nav
      className={`fixed h-20 w-full ${
        !isScrolled && scrollY >= 100 ? "invisible" : "visible"
      } ${scrollY <= 100 ? "bg-none" : "bg-backround-primary"}`}
    >
      <div className="mx-auto flex h-full w-[1200px] items-center justify-between">
        <h1
          className={`text-2xl font-semibold ${
            scrollY <= 100 ? "text-[white]" : "text-text-primary"
          }`}
        >
          WAKCRAFT
        </h1>
        <div className="flex items-center">
          <span
            className={`flex ${
              scrollY <= 100
                ? "fill-[#ccc] hover:fill-[white]"
                : "fill-text-primary hover:fill-text-primary"
            } hover:cursor-pointer [&>*:first-child]:dark:hidden [&>*:last-child]:hidden [&>*:last-child]:dark:block`}
            onClick={handleModeClick}
          >
            <LightMode />
            <DarkMode />
          </span>
        </div>
      </div>
    </nav>
  );
}
