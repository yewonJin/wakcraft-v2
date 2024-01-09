import { Fragment } from "react";

import TierBox from "@/components/common/TierBox";
import { Tier } from "@/domains/architect";

type Props = {
  placementResult: Tier;
};

export default function ArchitectureInfo(props: Props) {
  const { placementResult } = props;

  return (
    <Fragment>
      <div className="absolute left-2 top-2 flex flex-col gap-16 md:left-3 md:top-3 [&>span]:text-base">
        <TierBox
          type="detail"
          tier={placementResult}
          width="68px"
          height="75px"
        />
      </div>
    </Fragment>
  );
}
