import { Architect } from "./architect";

export type Game = "HackerWorldCup";

export type Worldcup = {
  game: Game;
  workInfo: {
    minecraft_id: string;
    episode: number;
    subject: string;
    image_url: string;
    youtube_url: string;
  };
  numberOfWin: number;
  numberOfParticipation: number;
};

export const getWinRatio = (item: Worldcup) => {
  const { numberOfWin, numberOfParticipation } = item;

  return numberOfParticipation === 0
    ? "??%"
    : ((numberOfWin * 100) / numberOfParticipation).toFixed(2) + "%";
};

export const createWorldcup = (architect: {
  minecraft_id: string;
  portfolio: Architect["portfolio"]["noobprohacker"][0];
}) => {
  const worldCup: Worldcup = {
    game: "HackerWorldCup",
    workInfo: {
      minecraft_id: architect.minecraft_id,
      episode: architect.portfolio.episode,
      subject: architect.portfolio.subject,
      image_url: architect.portfolio.image_url,
      youtube_url: architect.portfolio.youtube_url,
    },
    numberOfParticipation: 0,
    numberOfWin: 0,
  };

  return worldCup;
};
