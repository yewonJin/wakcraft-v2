"use client";

import { Fragment } from "react";

import { NoobProHacker } from "@/domains/noobprohacker";
import useMainCarousel from "@/hooks/useMainCarousel";
import MainCategory from "./MainCategory";
import MainImageSection from "./MainImageSection";

type Props = {
  lines: NoobProHacker["lineInfo"];
};

export default function MainInfo(props: Props) {
  const { lines } = props;
  const { curCategory, handleCategoryClick, initInterval, startInterval } =
    useMainCarousel(lines);

  return (
    <Fragment>
      <MainCategory
        curCategory={curCategory}
        handleCategoryClick={handleCategoryClick}
        lines={lines}
      />
      <MainImageSection
        curCategory={curCategory}
        lines={lines}
        initInterval={initInterval}
        startInterval={startInterval}
      />
    </Fragment>
  );
}

const lineTiers = ["noob", "pro", "hacker"] as ("noob" | "pro" | "hacker")[];
