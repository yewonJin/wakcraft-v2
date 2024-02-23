import { NoobProHacker } from "./noobprohacker";
import { PlacementTest } from "./placementTest";

export type Architect = {
  minecraft_id: string;
  wakzoo_id: string;
  tier: Tier[];
  curTier: Tier;
  placementTest_link: string;
  noobprohackerInfo: {
    win: number;
    hackerWin: number;
    proWin: number;
    participation: number;
  };
  portfolio: {
    noobprohacker: {
      episode: number;
      subject: string;
      line: Line;
      image_url: string;
      youtube_url: string;
      ranking: number;
      date: Date;
    }[];
    architectureNoobProHacker: {
      episode: number;
      subject: string;
      line: Line;
      image_url: string;
      youtube_url: string;
      ranking: number;
      date: Date;
    }[];
    placementTest: {
      season: number;
      image_url: string;
      placement_result: Tier;
      date: Date;
      ranking: number;
    }[];
    eventNoobProHacker: {
      contentName: string;
      episode: number;
      subject: string;
      line: string;
      image_url: string;
      youtube_url: string;
      ranking: number;
      date: Date;
    }[];
    architectureContest: {
      contentName: string;
      episode: number;
      subject: string;
      line: string;
      image_url: string;
      youtube_url: string;
      ranking: number;
      date: Date;
    }[];
  };
};

export type Line = "noob" | "pro" | "hacker";

export type Tier =
  | "마카게"
  | "오마카세"
  | "해커"
  | "해장국"
  | "국밥"
  | "미지근한 국밥"
  | "프로"
  | "계추"
  | "계륵"
  | "가짜 눕"
  | "퓨어 눕"
  | "언랭";

export const tierArray: Tier[] = [
  "마카게",
  "오마카세",
  "해커",
  "해장국",
  "국밥",
  "미지근한 국밥",
  "프로",
  "계추",
  "계륵",
  "가짜 눕",
  "퓨어 눕",
  "언랭",
];

export const translateLine = (line: Line) => {
  switch (line) {
    case "noob":
      return "눕";

    case "pro":
      return "프로";

    case "hacker":
      return "해커";
  }
};

export const convertLineTierToTier = (tier: string) => {
  switch (tier) {
    case "hacker":
      return tierArray.slice(0, 3);
    case "gukbap":
      return tierArray.slice(3, 6);
    case "pro":
      return tierArray.slice(6, 7);
    case "gyeruik":
      return tierArray.slice(7, 9);
    case "noob":
      return tierArray.slice(9, 11);
    default:
      return tierArray.slice(11);
  }
};

export const getNumberOfArchitectsByTier = (architects: Architect[]) => {
  return {
    hacker: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) >= 0 &&
        tierArray.indexOf(item.curTier) < 3,
    ).length,
    gukbap: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) >= 3 &&
        tierArray.indexOf(item.curTier) < 6,
    ).length,
    pro: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) >= 6 &&
        tierArray.indexOf(item.curTier) < 7,
    ).length,
    gyeruik: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) >= 7 &&
        tierArray.indexOf(item.curTier) < 9,
    ).length,
    noob: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) >= 9 &&
        tierArray.indexOf(item.curTier) < 11,
    ).length,
    unranked: architects.filter((item) => tierArray.indexOf(item.curTier) >= 11)
      .length,
  };
};

type TierKey = {
  [key in Tier]: string;
};

export const descriptionTier: TierKey = {
  마카게: `실력은 말 할 것도 없고 여러가지 새로운 도전으로 감동까지 주는사람`,
  오마카세: `실력은 거의 마카게에 근접해서 열심히 하면 마카게 갈수도 있는데 우승할 주제 고르기보다 자기가 만들고 싶은거 무조건 만들어야 되서 결국 자기가 만들고 싶은거 자주 만들다보니 평균 점수가 마카게에 닿지 않아서 결국 마카게로 못올라가고 있는 사람 (실력은 진짜 주제잘고르고 포텐 터지면 마카게급 만들어내는 사람이긴 함) 혹은 해커와 마카게 사이인 사람`,
  해커: `크기와 디테일이 모두 좋고 색감 혹은 연출 까지 다 잘하는 진짜 고수`,
  해장국: `이 사람 그냥 해커나 마찬가지인데 왠지 해커들 사이에 놓으면 또 해커는 아니라서 미치겠는 사람 (프로로 가면 눕프핵 밸런스 개망치고 해커로 가면 감동을 망쳐서 결국 컨텐츠를 시원하게 말아먹게 되는)`,
  국밥: `프로와 해커 사이 정도의 실력을 갖춘 사람 `,
  "미지근한 국밥": `노력도는 국밥인데 느낌스는 프로인 사람`,
  프로: `잘 만드는 사람`,
  계추: `계륵들 중 프로로 추천할 만한 사람`,
  계륵: `눕도 아니고 프로도 아닌 그 중간 어딘가인 사람`,
  "가짜 눕": `페이스를 조절한 눕`,
  "퓨어 눕": `진짜 개 못해서 진짜 눕 구하기 어려운 요즘시대에 꼭 필요한 눕`,
  언랭: `현재 티어가 없는 사람`,
};

export const convertToNoobProHackerPortfolio = (
  noobprohacker: NoobProHacker,
) => {
  const { contentInfo, lineInfo } = noobprohacker;

  type ArchitectsInfo = {
    minecraft_id: string;
    portfolio: Architect["portfolio"]["noobprohacker"][0];
  };

  const architectsInfo: ArchitectsInfo[] = [];

  lineInfo.forEach((line) => {
    for (const key in line.line_details) {
      const portfolioInfo: Architect["portfolio"]["noobprohacker"][0] = {
        episode: contentInfo.episode,
        subject: line.subject,
        line: key as Line,
        image_url: line.line_details[key as Line].image_url,
        youtube_url: line.line_details[key as Line].youtube_url,
        ranking: line.line_details[key as Line].ranking,
        date: new Date(contentInfo.date),
      };

      architectsInfo.push({
        minecraft_id: line.line_details[key as Line].minecraft_id,
        portfolio: portfolioInfo,
      });
    }
  });

  return architectsInfo;
};

export const convertToPlacementTestPortfolio = (
  placementTest: PlacementTest,
) => {
  type ArchitectsInfo = {
    minecraft_id: string;
    portfolio: Architect["portfolio"]["placementTest"][0];
  };

  const architectsInfo: ArchitectsInfo[] = [];

  placementTest.participants.forEach((participant) => {
    architectsInfo.push({
      minecraft_id: participant.minecraft_id,
      portfolio: {
        ranking: participant.ranking,
        season: placementTest.season,
        image_url: participant.image_url,
        placement_result: participant.placement_result,
        date: new Date(placementTest.date),
      },
    });
  });

  return architectsInfo;
};

export const backgroundColorVariants: TierKey = {
  마카게: "hover:bg-[#ec4899]",
  오마카세: "hover:bg-[#ec4899]",
  해커: "hover:bg-[#8b5cf6]",
  해장국: "hover:bg-[#8b5cf6]",
  국밥: "hover:bg-[#06b6d4]",
  "미지근한 국밥": "hover:bg-[#06b6d4]",
  프로: "hover:bg-[#f59e0b]",
  계추: "hover:bg-[#f59e0b]",
  계륵: "hover:bg-[#94a3b8]",
  "가짜 눕": "hover:bg-[#94a3b8]",
  "퓨어 눕": "hover:bg-[#a16207]",
  언랭: "hover:bg-[#a16207]",
};

export const getTierImage = (tier: string) => {
  if (tierArray.slice(0, 2).includes(tier as Tier))
    return "url('/images/tier/hacker2.webp')";
  else if (tierArray.slice(2, 4).includes(tier as Tier))
    return "url('/images/tier/hacker.webp')";
  else if (tierArray.slice(4, 5).includes(tier as Tier))
    return "url('/images/tier/gukbap2.webp')";
  else if (tierArray.slice(5, 6).includes(tier as Tier))
    return "url('/images/tier/gukbap.webp')";
  else if (tierArray.slice(6, 8).includes(tier as Tier))
    return "url('/images/tier/pro.webp')";
  else if (tierArray.slice(8, 10).includes(tier as Tier))
    return "url('/images/tier/gyeruik.webp')";
  else if (tierArray.slice(10, 10).includes(tier as Tier))
    return "url('/images/tier/noob2.webp')";
  else return "url('/images/tier/noob.webp')";
};
