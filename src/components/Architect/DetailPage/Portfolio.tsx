import ArchitectureInfo from "@/components/common/ArchitectureInfo";
import ImageBox from "@/components/common/ImageBox";
import { Architect } from "@/domains/architect";
import {
  getNumberOfPeople,
  isInfiniteTimeContent,
} from "@/domains/eventNoobProHacker";
import {
  renameToWebp,
  translateLineTiersToKorean,
} from "@/domains/noobprohacker";
import { Category } from "@/hooks/usePortfolioCategory";

type Props = {
  curCategory: Category;
  architect: Architect;
};

export default function Portfolio(props: Props) {
  const { curCategory, architect } = props;

  const portfolio = [
    ...generateNoobProHackerArr(architect),
    ...generatePlacementTestArr(architect),
    ...generateEventNoobProHackerArr(architect),
  ];

  return (
    <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 ">
      {[...portfolio]
        .sort((a, b) => {
          return (
            new Date(b.props["data-date"]).getTime() -
            new Date(a.props["data-date"]).getTime()
          );
        })
        .filter((portfolio) => {
          if (curCategory === "전체보기") return true;

          return portfolio.props["data-content"] === curCategory;
        })}
    </div>
  );
}

const generateNoobProHackerArr = (architect: Architect) => {
  return architect.portfolio.noobProHacker.map((noobprohacker) => (
    <div
      key={noobprohacker.episode + noobprohacker.subject}
      data-date={noobprohacker.date}
      data-content={"눕프로해커"}
    >
      <ImageBox
        imageUrl={renameToWebp(noobprohacker.image_url)}
        youtubeUrl={noobprohacker.youtube_url}
      />
      <ArchitectureInfo
        contentName={`제 ${noobprohacker.episode}회 눕프로해커`}
        subject={noobprohacker.subject}
        tier={translateLineTiersToKorean(noobprohacker.line)}
        ranking={noobprohacker.ranking}
      />
    </div>
  ));
};

const generatePlacementTestArr = (architect: Architect) => {
  return architect.portfolio.placementTest.map((placementTest) => (
    <div
      key={placementTest.season + placementTest.season}
      data-date={placementTest.date}
      data-content={"배치고사"}
    >
      <ImageBox imageUrl={renameToWebp(placementTest.image_url)} />
      <ArchitectureInfo
        contentName={`${placementTest.season}회 배치고사`}
        subject={placementTest.placement_result}
      />
    </div>
  ));
};

const generateEventNoobProHackerArr = (architect: Architect) => {
  const architectureContestArr = architect.portfolio.architectureContest.map(
    (eventNoobProHacker) => (
      <div
        key={eventNoobProHacker.episode + eventNoobProHacker.subject}
        data-date={eventNoobProHacker.date}
        data-content={"이벤트 눕프핵"}
      >
        <ImageBox
          imageUrl={renameToWebp(eventNoobProHacker.image_url)}
          youtubeUrl={eventNoobProHacker.youtube_url}
        />
        <ArchitectureInfo
          contentName={eventNoobProHacker.contentName}
          subject={eventNoobProHacker.subject}
          tier={eventNoobProHacker.line}
          ranking={eventNoobProHacker.ranking}
        />
      </div>
    ),
  );

  const eventNoobProHackerArr = architect.portfolio.eventNoobProHacker.map(
    (eventNoobProHacker) => {
      return (
        <div
          key={eventNoobProHacker.episode + eventNoobProHacker.subject}
          data-date={eventNoobProHacker.date}
          data-content={"이벤트 눕프핵"}
        >
          <ImageBox
            imageUrl={renameToWebp(eventNoobProHacker.image_url)}
            youtubeUrl={eventNoobProHacker.youtube_url}
            isUnlimited={isInfiniteTimeContent(eventNoobProHacker.episode)}
            architectNumber={getNumberOfPeople(eventNoobProHacker)}
          />
          <ArchitectureInfo
            contentName={eventNoobProHacker.contentName}
            subject={eventNoobProHacker.subject}
            tier={eventNoobProHacker.line}
            ranking={eventNoobProHacker.ranking}
          />
        </div>
      );
    },
  );

  return [...architectureContestArr, ...eventNoobProHackerArr];
};
