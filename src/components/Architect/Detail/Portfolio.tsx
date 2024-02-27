import { medium } from "@/app/layout";
import ArchitectureInfo from "@/components/common/ArchitectureInfo";
import ImageBox from "@/components/common/ImageBox/ImageBox";
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
    ...generateArchitectureNoobProHackerArr(architect),
    ...generatePlacementTestArr(architect),
    ...generateEventNoobProHackerArr(architect),
  ];

  type Dict = {
    [key: string]: JSX.Element[];
  };

  const dict: Dict = { "2021": [], "2022": [], "2023": [], "2024": [] };

  portfolio.forEach((item) => {
    const year = item.props["data-date"].split("-")[0] as
      | "2021"
      | "2022"
      | "2023"
      | "2024";

    dict[year].push(item);
  });

  console.log(dict);

  return (
    <div className="mt-3">
      {Object.keys(dict)
        .reverse()
        .map((key) => {
          if (
            dict[key].length === 0 ||
            (curCategory !== "전체보기" &&
              dict[key].every(
                (item) => item.props["data-content"] !== curCategory,
              ))
          )
            return;

          return (
            <div className="mb-14" key={key}>
              <div className="flex items-center gap-4">
                <h2
                  className={
                    medium.className + " min-w-max text-2xl text-text-primary"
                  }
                >
                  {key + "년"}
                </h2>
                <div className="h-[1px] w-full bg-text-tertiary"></div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                {dict[key]
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
            </div>
          );
        })}
    </div>
  );
}

const generateNoobProHackerArr = (architect: Architect) => {
  return architect.portfolio.noobprohacker.map((noobprohacker) => (
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

const generateArchitectureNoobProHackerArr = (architect: Architect) => {
  return architect.portfolio.architectureNoobProHacker.map((noobprohacker) => (
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
        contentName={`제 ${noobprohacker.episode}회 건축 눕프핵`}
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
        ranking={
          placementTest.ranking === 0 ? undefined : placementTest.ranking
        }
      />
    </div>
  ));
};

const generateEventNoobProHackerArr = (architect: Architect) => {
  const architectureContestArr = architect.portfolio.architectureContest.map(
    (architectureContest) => (
      <div
        key={architectureContest.episode + architectureContest.subject}
        data-date={architectureContest.date}
        data-content={"이벤트 눕프핵"}
      >
        <ImageBox
          imageUrl={renameToWebp(architectureContest.image_url)}
          youtubeUrl={architectureContest.youtube_url}
          isUnlimited={architectureContest.episode === 2 ? true : false}
        />
        <ArchitectureInfo
          contentName={architectureContest.contentName}
          subject={architectureContest.subject}
          tier={architectureContest.line}
          ranking={
            architectureContest.episode === 1
              ? architectureContest.ranking
              : undefined
          }
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
          {eventNoobProHacker.line || eventNoobProHacker.ranking ? (
            <ArchitectureInfo
              contentName={eventNoobProHacker.contentName}
              subject={eventNoobProHacker.subject}
              tier={eventNoobProHacker.line}
              ranking={eventNoobProHacker.ranking}
            />
          ) : (
            <ArchitectureInfo
              contentName={eventNoobProHacker.contentName}
              subject={eventNoobProHacker.subject}
            />
          )}
        </div>
      );
    },
  );

  return [...architectureContestArr, ...eventNoobProHackerArr];
};
