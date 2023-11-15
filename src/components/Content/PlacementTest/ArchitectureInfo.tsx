import { Fragment } from "react";

import TierBox from "@/components/common/TierBox";
import { Tier } from "@/domains/architect";

type Props = {
  placementResult: Tier;
  minecraft_id: string;
};

export default function ArchitectureInfo(props: Props) {
  const { placementResult, minecraft_id } = props;

  return (
    <Fragment>
      <div className="absolute left-2 top-2 flex flex-col gap-16 md:left-3 md:top-3 [&>span]:text-base">
        <TierBox tier={placementResult} width="68px" height="75px" />
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
