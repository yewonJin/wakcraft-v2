import { Fragment } from "react";

import {
  getAllNoobProHackers,
  getAllNoobprohackersWithSweepLine,
} from "@/api/server/noobprohacker";
import { getAllArchitects } from "@/api/server/architect";
import { getNumberOfArchitectsByTier } from "@/domains/architect";
import {
  convertToSweepLine,
  getHackerWinnerLine,
  renameTo1080Webp,
} from "@/domains/noobprohacker";
import { getAllSchedules } from "@/api/server/schedule";

import BackgroundImage from "@/components/Home/BackgroundImage/BackgroundImage";
import Main from "@/components/Home/Main/Main";
import Calendar from "@/components/Home/Calendar/Calendar";
import Info from "@/components/Home/Info/Info";
import RecentWinner from "@/components/Home/RecentWinner/RecentWinner";
import SweepLine from "@/components/Home/SweepLine/SweepLine";
import {
  getAllArchitectureNoobProHackers,
  getAllArchitectureNoobprohackersWithSweepLine,
} from "@/api/server/architectureNoobProHacker";

export default async function Page() {
  const noobprohackers = (await getAllNoobProHackers()).sort(
    (a, b) => b.contentInfo.episode - a.contentInfo.episode,
  );
  const architectureNoobProHackers = (
    await getAllArchitectureNoobProHackers()
  ).sort((a, b) => b.contentInfo.episode - a.contentInfo.episode);

  const noobprohackersWithSweepLine = (
    await getAllNoobprohackersWithSweepLine()
  ).sort((a, b) => a.contentInfo.episode - b.contentInfo.episode);

  const architectureNoobProHackersWithSweepLine = (
    await getAllArchitectureNoobprohackersWithSweepLine()
  ).sort((a, b) => a.contentInfo.episode - b.contentInfo.episode);

  const architects = await getAllArchitects();
  const schedules = await getAllSchedules();
  const contents = [...noobprohackers, ...architectureNoobProHackers].sort(
    (a, b) =>
      new Date(b.contentInfo.date).getTime() -
      new Date(a.contentInfo.date).getTime(),
  );

  return (
    <Fragment>
      <title>왁크래프트 | 홈</title>
      <BackgroundImage
        url={renameTo1080Webp(
          getHackerWinnerLine(contents[0]).line_details.hacker.image_url,
        )}
      />
      <Main noobprohacker={JSON.parse(JSON.stringify(contents[0]))} />
      <Calendar schedules={JSON.parse(JSON.stringify(schedules))} />
      <Info
        numberOfArchitectsByTier={JSON.parse(
          JSON.stringify(getNumberOfArchitectsByTier(architects)),
        )}
      />
      <RecentWinner
        noobprohackers={JSON.parse(JSON.stringify(contents.slice(0, 3)))}
      />
      <SweepLine
        sweepLines={JSON.parse(
          JSON.stringify(
            convertToSweepLine([
              ...noobprohackersWithSweepLine,
              ...architectureNoobProHackersWithSweepLine,
            ]).sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
            ),
          ),
        )}
      />
    </Fragment>
  );
}
