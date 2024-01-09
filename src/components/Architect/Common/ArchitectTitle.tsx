"use client";

import TierBox from "@/components/common/TierBox";
import { Architect } from "@/domains/architect";
import { ExtendedArchitect } from "../Main/ArchitectList";
import Highlighting from "./Highlighting";
import Statistics from "./Statistics";

type Props = Main | Detail;

export default function ArchitectTitle(props: Props) {
  const { architect, type } = props;

  return (
    <div
      key={architect.minecraft_id}
      className="flex w-full flex-wrap items-center justify-between rounded-lg md:gap-8 xl:flex-nowrap"
    >
      <div
        className={`flex items-center ${
          type === "main" ? "gap-5 sm:gap-8" : "gap-6"
        } md:[&>span:first-child]:flex`}
      >
        <TierBox type={type} tier={architect.curTier} />
        {type === "main" ? (
          <Highlighting architect={props.architect} input={props.input} />
        ) : (
          <div className="flex flex-col gap-3 md:gap-1">
            <p className="text-text-primary md:text-xl">
              {architect.minecraft_id}
            </p>
            <p className="text-text-secondary">{architect.wakzoo_id}</p>
          </div>
        )}
      </div>
      {type === "main" && props.input === props.debouncedSearchText && (
        <Statistics noobProHackerInfo={architect.noobprohackerInfo} />
      )}
      {type === "detail" && (
        <Statistics noobProHackerInfo={architect.noobprohackerInfo} />
      )}
    </div>
  );
}

type Main = {
  type: "main";
  architect: ExtendedArchitect;
  input: string;
  debouncedSearchText: string;
};

type Detail = {
  type: "detail";
  architect: Architect;
};
