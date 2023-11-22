"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import LightMode from "../../public/icons/light_mode.svg";
import DarkMode from "../../public/icons/dark_mode.svg";
import useTheme from "@/hooks/useTheme";

export default function TopNav() {
  const { scrollY, isScrolled, handleModeClick } = useTheme();
  const pathname = usePathname();

  return (
    <nav
      className={`fixed z-10 h-20 w-full ${
        !isScrolled && scrollY >= 100 ? "invisible" : "visible"
      } ${scrollY <= 100 ? "bg-none" : "bg-background-primary"} px-4 xl:px-0`}
    >
      <div className="mx-auto flex h-full w-[1200px] items-center justify-between">
        <div className="flex gap-32">
          <h1
            className={`text-2xl font-semibold ${
              scrollY <= 100 && pathname === "/"
                ? "text-[white]"
                : "text-text-primary"
            }`}
          >
            <Link href={"/"}>WAKCRAFT</Link>
          </h1>
          <div className="flex items-center gap-20">
            <h2
              className={`${
                scrollY <= 100 && pathname === "/"
                  ? "text-[white]"
                  : "text-text-primary"
              }`}
            >
              <Link href={"/architect"}>건축가</Link>
            </h2>
            <h2
              className={`${
                scrollY <= 100 && pathname === "/"
                  ? "text-[white]"
                  : "text-text-primary"
              }`}
            >
              <Link href={"/noobprohacker"}>눕프로해커</Link>
            </h2>
            <h2
              className={`${
                scrollY <= 100 && pathname === "/"
                  ? "text-[white]"
                  : "text-text-primary"
              }`}
            >
              <Link href={"/content"}>컨텐츠</Link>
            </h2>
            <h2
              className={`${
                scrollY <= 100 && pathname === "/"
                  ? "text-[white]"
                  : "text-text-primary"
              }`}
            >
              <Link href={"/game"}>게임</Link>
            </h2>
          </div>
        </div>
        <div className="flex items-center">
          <span
            className={`flex ${
              scrollY <= 100 && pathname === "/"
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
