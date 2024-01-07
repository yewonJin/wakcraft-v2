"use client";

import { medium } from "@/app/layout";
import { NoobProHacker } from "@/domains/noobprohacker";
import RecentWinnerGroup from "./RecentWinnerGroup";

type Props = {
  noobprohackers: NoobProHacker[];
};

export default function RecentWinner(props: Props) {
  const { noobprohackers } = props;

  return (
    <div className="mx-auto mt-20 max-w-[1200px] px-4 xl:mt-48 xl:px-0 ">
      <h3
        className={`${medium.className} text-2xl text-text-primary sm:text-3xl`}
      >
        최근 우승 작품
      </h3>
      <div
        className={`relative mt-10 flex flex-wrap gap-5 gap-y-8 md:[&>div:nth-child(2)]:flex-row-reverse`}
      >
        {noobprohackers.map((noobprohacker) => (
          <RecentWinnerGroup
            key={noobprohacker.contentInfo.episode}
            noobprohacker={noobprohacker}
          />
        ))}
      </div>
    </div>
  );
}
