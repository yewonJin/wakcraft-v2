import { Fragment } from "react";

import BackgroundImage from "./BackgroundImage";
import RecentNoobProHacker from "./RecentNoobProHacker";
import MainInfo from "./MainInfo";
import RecentWinner from "./RecentWinner";
import { getAllNoobProHacker } from "@/api/server/noobprohacker";
import { getAllArchitects } from "@/api/server/architect";
import { getNumberOfArchitectsByTier } from "@/domains/architect";

export default async function Home() {
  const noobprohackers = await getAllNoobProHacker();
  const architects = await getAllArchitects();

  return (
    <Fragment>
      <BackgroundImage />
      <RecentNoobProHacker
        noobprohacker={JSON.parse(JSON.stringify(noobprohackers.reverse()[0]))}
      />
      <MainInfo
        numberOfArchitectsByTier={JSON.parse(
          JSON.stringify(getNumberOfArchitectsByTier(architects)),
        )}
      />
      <RecentWinner
        noobprohackers={JSON.parse(JSON.stringify(noobprohackers.slice(0, 3)))}
      />
    </Fragment>
  );
}
