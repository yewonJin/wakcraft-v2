import { Fragment } from "react";

import BackgroundImage from "./BackgroundImage";
import Main from "./Main/Main";
import Info from "./Info/Info";
import Calendar from "./Calendar/Calendar";
import RecentWinner from "./RecentWinner/RecentWinner";
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
import { getAllSchedules } from "@/api/server/schedule";

export default async function Home() {
  const noobprohackers = (await getAllNoobProHackers()).sort(
    (a, b) => b.contentInfo.episode - a.contentInfo.episode,
  );
  const noobprohackersWithSweepLine = (
    await getAllNoobprohackersWithSweepLine()
  ).sort((a, b) => a.contentInfo.episode - b.contentInfo.episode);
  const architects = await getAllArchitects();
  const schedules = await getAllSchedules();

  return (
    <Fragment>
      <BackgroundImage
        url={renameTo1080Webp(
          getHackerWinnerLine(noobprohackers[0]).line_details.hacker.image_url,
        )}
      />
      <Main
        noobprohacker={JSON.parse(
          JSON.stringify(
            noobprohackers.sort(
              (a, b) => b.contentInfo.episode - a.contentInfo.episode,
            )[0],
          ),
        )}
      />
      <Calendar schedules={JSON.parse(JSON.stringify(schedules))} />
      <Info
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
