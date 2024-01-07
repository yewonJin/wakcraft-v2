"use client";

import { useState } from "react";

import { SweepLine } from "@/domains/noobprohacker";
import SweepLinePageButton from "./SweepLinePageButton";
import SweepLineInfo from "./SweepLineInfo";
import SweepLineSection from "./SweepLineSection";
import SweepLineTitle from "./SweepLineTitle";

type Props = {
  sweepLines: SweepLine[];
};

export default function SweepLine(props: Props) {
  const { sweepLines } = props;

  const [page, setPage] = useState(0);

  return (
    <div className="mx-auto mt-20 max-w-[1200px] px-4 pb-10 xl:mt-48 xl:px-0 ">
      <SweepLineTitle />
      <div className="relative mt-8">
        <SweepLinePageButton
          type="prev"
          setPage={setPage}
          sweepLines={sweepLines}
          page={page}
        />
        <SweepLinePageButton
          type="next"
          setPage={setPage}
          sweepLines={sweepLines}
          page={page}
        />
        <SweepLineInfo sweepLines={sweepLines} page={page} />
        <SweepLineSection sweepLines={sweepLines} page={page} />
      </div>
    </div>
  );
}
