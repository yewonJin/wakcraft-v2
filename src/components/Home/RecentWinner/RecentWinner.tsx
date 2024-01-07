"use client";

import { NoobProHacker } from "@/domains/noobprohacker";
import RecentWinnerSection from "./RecentWinnerSection";
import RecentWinnerTitle from "./RecentWinnerTitle";

type Props = {
  noobprohackers: NoobProHacker[];
};

export default function RecentWinner(props: Props) {
  const { noobprohackers } = props;

  return (
    <div className="mx-auto mt-20 max-w-[1200px] px-4 xl:mt-48 xl:px-0 ">
      <RecentWinnerTitle />
      <RecentWinnerSection noobprohackers={noobprohackers} />
    </div>
  );
}
