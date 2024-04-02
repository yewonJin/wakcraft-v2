import { Architect } from "./architect";

export type EventNoobProHacker = {
  contentInfo: {
    contentName: string;
    episode: number;
    date: string;
    youtube_url: string;
    isInFiniteTime: boolean;
  };
  lineInfo: {
    subject: string;
    youtube_url: string;
    line_ranking: number;
    line_details: {
      line: string;
      minecraft_id: string[];
      image_url: string;
      youtube_url: string;
      ranking: number;
    }[];
  }[];
};

export const isInfiniteTimeContent = (episode: number) => {
  const arr = [1, 4, 6, 9];

  if (arr.includes(episode)) return true;

  return false;
};

export const getNumberOfPeople = (
  item: Architect["portfolio"]["eventNoobProHacker"][0],
) => {
  if (item.episode === 3 && item.line === "프로") return 2;

  if (item.episode === 3 && item.line === "눕") return 10;

  const numberOfPeople = item.line?.split("x")[1];

  if (!numberOfPeople) return 1;

  if (item.episode === 5 && numberOfPeople) return parseInt(numberOfPeople);

  return 1;
};
