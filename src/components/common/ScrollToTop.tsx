"use client";

import { useEffect, useState } from "react";

import ArrowUpWard from "../../../public/icons/arrow_upward.svg";

export default function ScrollToTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener("scroll", onScroll);
  }, []);

  if (scrollY === 0) return;

  return (
    <span
      onClick={() => window.scrollTo(0, 0)}
      className="fixed bottom-[5%] right-[5%] z-10 flex h-14 w-14 items-center justify-center rounded-full bg-background-tertiary p-2 duration-300 hover:cursor-pointer hover:bg-background-secondary 2xl:bottom-[12vh] 2xl:right-[14vw] [&>svg]:fill-text-secondary"
    >
      <ArrowUpWard />
    </span>
  );
}
