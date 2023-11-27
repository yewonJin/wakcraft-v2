import { NoobProHacker } from "./noobprohacker";

export type Line = "noob" | "pro" | "hacker";

export type Tier =
  | "마카게"
  | "오마카세"
  | "해커"
  | "해장국"
  | "국밥"
  | "미지근한 국밥"
  | "식은 국밥"
  | "프로"
  | "계추"
  | "계륵"
  | "착한 눕"
  | "안 나쁜 눕"
  | "그냥 눕"
  | "진짜 눕"
  | "언랭";

export type Architect = {
  minecraft_id: string;
  wakzoo_id: string;
  tier: Tier[];
  curTier: Tier;
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
    placementTest: {
      season: number;
      image_url: string;
      placement_result: Tier;
      date: Date;
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

export const tierArray = [
  "마카게",
  "오마카세",
  "해커",
  "해장국",
  "국밥",
  "미지근한 국밥",
  "식은 국밥",
  "프로",
  "계추",
  "계륵",
  "착한 눕",
  "안 나쁜 눕",
  "그냥 눕",
  "진짜 눕",
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
      return tierArray.slice(3, 7);
    case "pro":
      return tierArray.slice(7, 8);
    case "gyeruik":
      return tierArray.slice(8, 10);
    case "noob":
      return tierArray.slice(10, 14);
    default:
      return tierArray.slice(14);
  }
};

export const getNumberOfArchitectsByTier = (architects: Architect[]) => {
  return {
    hacker: architects.filter((item) => tierArray.indexOf(item.curTier) <= 2)
      .length,
    gukbap: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) > 2 &&
        tierArray.indexOf(item.curTier) <= 6,
    ).length,
    pro: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) > 6 &&
        tierArray.indexOf(item.curTier) <= 7,
    ).length,
    gyeruik: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) > 7 &&
        tierArray.indexOf(item.curTier) <= 9,
    ).length,
    noob: architects.filter(
      (item) =>
        tierArray.indexOf(item.curTier) > 9 &&
        tierArray.indexOf(item.curTier) <= 13,
    ).length,
    unranked: architects.filter((item) => tierArray.indexOf(item.curTier) > 13)
      .length,
  };
};

type DescriptionTier = {
  [key in Tier]: string;
};

export const descriptionTier: DescriptionTier = {
  마카게: `실력은 말 할 것도 없고 여러가지 새로운 도전으로 감동까지 주는사람`,
  오마카세: `실력은 거의 마카게에 근접해서 열심히 하면 마카게 갈수도 있는데 우승할 주제 고르기보다 자기가 만들고 싶은거 무조건 만들어야 되서 결국 자기가 만들고 싶은거 자주 만들다보니 평균 점수가 마카게에 닿지 않아서 결국 마카게로 못올라가고 있는 사람 (실력은 진짜 주제잘고르고 포텐 터지면 마카게급 만들어내는 사람이긴 함) 혹은 해커와 마카게 사이인 사람`,
  해커: `크기와 디테일이 모두 좋고 색감 혹은 연출 까지 다 잘하는 진짜 고수`,
  해장국: `이 사람 그냥 해커나 마찬가지인데 왠지 해커들 사이에 놓으면 또 해커는 아니라서 미치겠는 사람 (프로로 가면 눕프핵 밸런스 개망치고 해커로 가면 감동을 망쳐서 결국 컨텐츠를 시원하게 말아먹게 되는)`,
  국밥: `프로와 해커 사이 정도의 실력을 갖춘 사람 `,
  "미지근한 국밥": `노력도는 국밥인데 느낌스는 프로인 사람`,
  "식은 국밥": `크기는 해커인데 디테일이 프로라서 차라리 그냥 작게 만들었으면 더 프로답고 좋았을 텐데.. 라는 느낌이 드는 사람 `,
  프로: `잘 만드는 사람`,
  계추: `계륵들 중 프로로 추천할 만한 사람`,
  계륵: `눕도 아니고 프로도 아닌 그 중간 어딘가인 사람`,
  "착한 눕": `눕프핵의 취지에 가장 맞는 눕`,
  "안 나쁜 눕": `큰데 눕인 사람`,
  "그냥 눕": `그냥 뉴비`,
  "진짜 눕": `진짜 마크를 처음 해 본 사람`,
  언랭: `현재 티어가 없는 사람`,
};

export const convertToPortfolio = (noobprohacker: NoobProHacker) => {
  const { contentInfo, lineInfo } = noobprohacker;

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

type ArchitectsInfo = {
  minecraft_id: string;
  portfolio: Architect["portfolio"]["noobprohacker"][0];
};
