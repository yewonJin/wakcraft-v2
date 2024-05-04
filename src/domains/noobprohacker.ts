export type NoobProHacker = {
  contentInfo: {
    episode: number;
    main_subject: string;
    date: string;
    youtube_url: string;
  };
  lineInfo: {
    subject: string;
    youtube_url: string;
    line_ranking: number;
    line_details: {
      noob: {
        minecraft_id: string;
        image_url: string;
        youtube_url: string;
        ranking: number;
      };
      pro: {
        minecraft_id: string;
        image_url: string;
        youtube_url: string;
        ranking: number;
      };
      hacker: {
        minecraft_id: string;
        image_url: string;
        youtube_url: string;
        ranking: number;
      };
    };
  }[];
};

export const renameToWebp = (imageUrl: string) => {
  const splitName = imageUrl.split(".");

  return `${splitName.slice(0, splitName.length - 1).join(".")}.webp`;
};

export const renameTo1080Webp = (imageUrl: string) => {
  const splitName = imageUrl.split(".");

  return `${splitName.slice(0, splitName.length - 1).join(".")}.1080p.webp`;
};

export const getHackerWinnerLine = (noobprohacker: NoobProHacker) => {
  return noobprohacker.lineInfo.filter(
    (line) => line.line_details.hacker.ranking === 1,
  )[0];
};

export const getProWinnerLine = (noobprohacker: NoobProHacker) => {
  return noobprohacker.lineInfo.filter(
    (line) => line.line_details.pro.ranking === 1,
  )[0];
};

export const getLineWinner = (lines: NoobProHacker["lineInfo"]) => {
  return lines.findIndex((line) => line.line_ranking === 1);
};

export const translateLineTiersToKorean = (
  lineTier: "noob" | "pro" | "hacker",
) => {
  switch (lineTier) {
    case "noob":
      return "눕";
    case "pro":
      return "프로";
    case "hacker":
      return "해커";
  }
};

export type SweepLine = {
  episode: number;
  line_details: NoobProHacker["lineInfo"][0]["line_details"];
  line_ranking: number;
  subject: string;
  youtube_url: string;
  date: string;
};

/** 눕프핵 정보를 싹슬이 라인 정보로 변환하는 함수 */
export const convertToSweepLine = (arr: NoobProHacker[]): SweepLine[] => {
  const sweepLineArr: SweepLine[] = [];

  arr.forEach((item) => {
    const winnerLine = item.lineInfo.filter(
      (line) => line.line_ranking === 1,
    )[0];

    sweepLineArr.push({
      episode: item.contentInfo.episode,
      line_details: winnerLine.line_details,
      line_ranking: winnerLine.line_ranking,
      subject: winnerLine.subject,
      youtube_url: winnerLine.youtube_url,
      date: item.contentInfo.date,
    });
  });

  return sweepLineArr;
};

export const lineInfoObject: NoobProHacker["lineInfo"][0] = {
  subject: "",
  youtube_url: "null",
  line_ranking: 0,
  line_details: {
    noob: {
      minecraft_id: "",
      image_url: "",
      youtube_url: "null",
      ranking: 0,
    },
    pro: {
      minecraft_id: "",
      image_url: "",
      youtube_url: "null",
      ranking: 0,
    },
    hacker: {
      minecraft_id: "",
      image_url: "",
      youtube_url: "null",
      ranking: 0,
    },
  },
};
