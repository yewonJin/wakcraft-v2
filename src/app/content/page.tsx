import { medium } from "../layout";
import Card from "@/components/common/Card";

import { getAllEventNoobProHacker } from "@/api/server/eventNoobProHacker";
import { getAllMatchYourTier } from "@/api/server/matchYourTier";
import { getAllArchitectureContest } from "@/api/server/architectureContest";
import { getAllPlacementTest } from "@/api/server/placementTest";
import { getAllGuessTimes } from "@/api/server/guessTime";

export default async function Page() {
  const cards = await generateCards();

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>
        컨텐츠
      </h1>
      <p className="mt-4 text-base text-text-secondary">
        눕프로해커 이외의 마인크래프트 컨텐츠를 볼 수 있다.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-8">
        {cards.sort((a, b) => b.props.date - a.props.date).map((card) => card)}
      </div>
    </div>
  );
}

const generateCards = async () => {
  const [
    eventNoobProHackers,
    matchYourTiers,
    architectureContests,
    placementTests,
    guessTimes,
  ] = await Promise.all([
    getAllEventNoobProHacker(),
    getAllMatchYourTier(),
    getAllArchitectureContest(),
    getAllPlacementTest(),
    getAllGuessTimes(),
  ]);

  const cards: JSX.Element[] = [];

  eventNoobProHackers.forEach((eventNoobProHacker) =>
    cards.push(
      <Card
        key={eventNoobProHacker.contentInfo.contentName}
        contentType="이벤트 눕프핵"
        episode={eventNoobProHacker.contentInfo.episode}
        subject={eventNoobProHacker.contentInfo.contentName}
        date={new Date(eventNoobProHacker.contentInfo.date)}
        youtubeUrl={
          eventNoobProHacker.contentInfo.youtube_url !== "null"
            ? eventNoobProHacker.contentInfo.youtube_url.split("/")[3]
            : "null"
        }
        linesSubject={eventNoobProHacker.lineInfo.map((item) => item.subject)}
      />,
    ),
  );

  matchYourTiers.forEach((matchYourTier) =>
    cards.push(
      <Card
        key={matchYourTier.contentInfo.contentName}
        contentType="티어 맞추기"
        episode={matchYourTier.contentInfo.episode}
        subject={"티어 맞추기"}
        date={new Date(matchYourTier.contentInfo.date)}
        youtubeUrl={
          matchYourTier.contentInfo.youtube_url !== "null"
            ? matchYourTier.contentInfo.youtube_url.split("/")[3]
            : "null"
        }
        linesSubject={[]}
      />,
    ),
  );

  architectureContests.forEach((architectureContest) =>
    cards.push(
      <Card
        key={"건축 컨테스트 " + architectureContest.contentInfo.episode}
        contentType="건축 콘테스트"
        episode={architectureContest.contentInfo.episode}
        subject={architectureContest.contentInfo.subject}
        date={new Date(architectureContest.contentInfo.date)}
        youtubeUrl={
          architectureContest.contentInfo.youtube_url !== "null"
            ? architectureContest.contentInfo.youtube_url.split("/")[3]
            : "null"
        }
        linesSubject={[]}
      />,
    ),
  );

  placementTests.forEach((placementTest) =>
    cards.push(
      <Card
        key={"배치고사 시즌 " + placementTest.season}
        contentType="배치고사"
        episode={placementTest.season}
        subject="배치고사"
        date={new Date(placementTest.date)}
        youtubeUrl={
          placementTest.youtube_url !== "null"
            ? placementTest.youtube_url.split("/")[3]
            : "null"
        }
        linesSubject={[]}
      />,
    ),
  );

  guessTimes.forEach((guessTime) =>
    cards.push(
      <Card
        key={"시간 맞추기"}
        contentType="시간 맞추기"
        episode={guessTime.contentInfo.episode}
        subject="시간 맞추기"
        date={new Date(guessTime.contentInfo.date)}
        youtubeUrl={
          guessTime.contentInfo.youtube_url !== "null"
            ? guessTime.contentInfo.youtube_url.split("/")[3]
            : "null"
        }
        linesSubject={[]}
      />,
    ),
  );

  return cards;
};
