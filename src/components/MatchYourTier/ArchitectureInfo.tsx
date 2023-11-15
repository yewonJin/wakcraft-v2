import { Tier } from "@/domains/architect";
import { Fragment } from "react";

type Props = {
  expectedTier: Tier;
  currentTier: Tier;
  minecraft_id: string;
};

export default function ArchitectureInfo(props: Props) {
  const { expectedTier, currentTier, minecraft_id } = props;

  return (
    <Fragment>
      <div className="absolute left-2 top-2 flex flex-col gap-[6px] md:left-3 md:top-3 [&>span]:text-base">
        <p
          className="rounded-md bg-[rgba(0,0,0,0.5)] px-2 py-1 text-[white]"
          style={{ textShadow: "1px 1px 3px #222" }}
        >
          <span className="text-[#aaa]">예상 : </span> {expectedTier}
        </p>
        <p
          className="rounded-md bg-[rgba(0,0,0,0.5)] px-2 py-1 text-[white]"
          style={{ textShadow: "1px 1px 3px #222" }}
        >
          <span className="text-[#aaa]">정답 : </span> {currentTier}
        </p>
      </div>
      <p
        className="absolute bottom-4 left-0 bg-[rgba(0,0,0,0.6)] py-1 pl-3 pr-2 text-base text-[white]"
        style={{ textShadow: "1px 1px 5px #222" }}
      >
        {minecraft_id}
      </p>
    </Fragment>
  );
}
