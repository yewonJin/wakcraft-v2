import Link from "next/link";

import Card from "@/components/common/Card/Card";
import PageTitle from "@/components/common/PageTitle";
import { getAllEventNoobProHacker } from "@/api/server/eventNoobProHacker";
import { getAllMatchYourTier } from "@/api/server/matchYourTier";
import { getAllArchitectureContest } from "@/api/server/architectureContest";
import { getAllPlacementTest } from "@/api/server/placementTest";
import { getAllGuessTimes } from "@/api/server/guessTime";
import { getContentLinkUrl } from "@/domains/content";

export default async function Page() {
  const cards = await generateCards();

  return (
    <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
      <PageTitle
        title="컨텐츠"
        content="눕프로해커 이외의 마인크래프트 컨텐츠를 볼 수 있다."
      />
      <div className="grid-col-1 mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards
          .sort(
            (a, b) => b.props.children.props.date - a.props.children.props.date,
          )
          .map((card) => card)}
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
      <Link
        key={"이벤트 눕프핵 - " + eventNoobProHacker.contentInfo.episode}
        href={getContentLinkUrl(
          "이벤트 눕프핵",
          eventNoobProHacker.contentInfo.episode,
        )}
      >
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
        />
      </Link>,
    ),
  );

  matchYourTiers.forEach((matchYourTier) =>
    cards.push(
      <Link
        key={"티어 맞추기 - " + matchYourTier.contentInfo.episode}
        href={getContentLinkUrl(
          "티어 맞추기",
          matchYourTier.contentInfo.episode,
        )}
      >
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
        />
      </Link>,
    ),
  );

  architectureContests.forEach((architectureContest) =>
    cards.push(
      <Link
        key={"건축 컨테스트 - " + architectureContest.contentInfo.episode}
        href={getContentLinkUrl(
          "건축 콘테스트",
          architectureContest.contentInfo.episode,
        )}
      >
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
        />
      </Link>,
    ),
  );

  placementTests.forEach((placementTest) =>
    cards.push(
      <Link
        key={"배치고사 - " + placementTest.season}
        href={getContentLinkUrl("배치고사", placementTest.season)}
      >
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
        />
      </Link>,
    ),
  );

  guessTimes.forEach((guessTime) =>
    cards.push(
      <Link
        key={"시간 맞추기 - " + guessTime.contentInfo.episode}
        href={getContentLinkUrl("시간 맞추기", guessTime.contentInfo.episode)}
      >
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
        />
      </Link>,
    ),
  );

  return cards;
};
