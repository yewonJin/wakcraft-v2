import { Fragment } from "react";

import BackgroundImage from "./BackgroundImage";
import RecentNoobProHacker from "./RecentNoobProHacker";
import MainInfo from "./MainInfo";
import RecentWinner from "./RecentWinner";
import {
  getAllNoobProHackers,
  getAllNoobprohackersWithSweepLine,
} from "@/api/server/noobprohacker";
import { getAllArchitects } from "@/api/server/architect";
import { getNumberOfArchitectsByTier } from "@/domains/architect";
import SweepLine from "./SweepLine";
import {
  convertToSweepLine,
  getHackerWinnerLine,
  renameTo1080Webp,
} from "@/domains/noobprohacker";

export default async function Home() {
  const noobprohackers = await getAllNoobProHackers();
  const noobprohackersWithSweepLine = await getAllNoobprohackersWithSweepLine();
  const architects = await getAllArchitects();

  return (
    <Fragment>
      <BackgroundImage
        url={renameTo1080Webp(
          getHackerWinnerLine(noobprohackers[noobprohackers.length - 1])
            .line_details.hacker.image_url,
        )}
      />
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
      <SweepLine
        sweepLines={JSON.parse(
          JSON.stringify(convertToSweepLine(noobprohackersWithSweepLine)),
        )}
      />
    </Fragment>
  );
}
