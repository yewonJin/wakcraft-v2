import { Dispatch, SetStateAction } from "react";

import { SweepLine } from "@/domains/noobprohacker";
import ArrowBack from "../../../../public/icons/arrow_back.svg";

type Props = {
  type: "prev" | "next";
  sweepLines: SweepLine[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default function SweepLinePageButton(props: Props) {
  const { type, sweepLines, page, setPage } = props;

  return (
    <span
      className={`${
        type === "prev"
          ? "right-28 xl:-left-20 xl:right-auto xl:top-[50%]"
          : "right-5  xl:-right-20 xl:top-[50%] [&>svg]:rotate-180"
      } absolute -top-3 rounded-full bg-background-secondary p-3 hover:cursor-pointer hover:bg-background-tertiary [&>svg]:fill-text-tertiary `}
      onClick={() => setPage((prev) => (type === "next" ? prev + 1 : prev - 1))}
      style={{
        display:
          (type === "prev" && page === 0) ||
          (type === "next" && page === sweepLines.length - 1)
            ? "none"
            : "",
      }}
    >
      <ArrowBack />
    </span>
  );
}
