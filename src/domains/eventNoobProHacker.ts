import { Architect } from "./architect";

export const isInfiniteTimeContent = (episode: number) => {
  const arr = [1, 4, 6];

  if (arr.includes(episode)) return true;

  return false;
};

export const getNumberOfPeople = (
  item: Architect["portfolio"]["eventNoobProHacker"][0],
) => {
  if (item.episode === 3 && item.line === "프로") return 2;

  if (item.episode === 3 && item.line === "눕") return 10;

  const numberOfPeople = item.line.split("x")[1];

  if (item.episode === 5 && numberOfPeople) return parseInt(numberOfPeople);

  return undefined;
};
