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
