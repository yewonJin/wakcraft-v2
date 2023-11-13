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
  noobProHackerInfo: {
    win: number;
    hackerWin: number;
    proWin: number;
    participation: number;
  };
  portfolio: {
    noobProHacker: {
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
