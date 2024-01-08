import { Fragment } from "react";

import { Tier } from "@/domains/architect";

type Props = {
  expectedTier: Tier;
  currentTier: Tier;
};

export default function ArchitectureInfo(props: Props) {
  const { expectedTier, currentTier } = props;

  return (
    <Fragment>
      <div className="absolute left-2 top-2 flex flex-col gap-[6px] md:left-3 md:top-3 [&>span]:text-base">
        <p
          className=" px-2 py-1 text-[white]"
          style={{ textShadow: "1px 1px 1px #222" }}
        >
          <span className="text-[#aaa]">예상 : </span> {expectedTier}
        </p>
        <p
          className=" px-2 py-1 text-[white]"
          style={{ textShadow: "1px 1px 1px #222" }}
        >
          <span className="text-[#aaa]">정답 : </span> {currentTier}
        </p>
      </div>
    </Fragment>
  );
}
