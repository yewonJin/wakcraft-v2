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
