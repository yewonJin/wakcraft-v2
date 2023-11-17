import { useState } from "react";

import { NoobProHacker } from "@/domains/noobprohacker";
import { shuffle } from "@/utils/lib";

export type Difficulty = null | "LOW" | "MEDIUM" | "HIGH";
export type NumberOfArchitecture = null | 20 | 30 | 50;

export type Question = {
  minecraft_id: string;
  image_url: string;
};

const useSetting = () => {
  const [page, setPage] = useState(0);

  const [difficulty, setDifficulty] = useState<Difficulty>(null);
  const [numberOfArchitecture, setNumberOfArchitecture] =
    useState<NumberOfArchitecture>(null);
  const [architectureArr, setArchitectureArr] = useState<Question[]>([]);

  const startGame = async () => {
    if (difficulty === null || numberOfArchitecture === null) return;

    const res: NoobProHacker[] = await getAllNoobProHackerInClient();

    setArchitectureArr(
      shuffle(
        res
          .map((noobprohacker) =>
            noobprohacker.lineInfo.map((line) => line.line_details.hacker),
          )
          .flat(),
      ).slice(0, numberOfArchitecture),
    );

    setPage((prev) => prev + 1);
  };

  return {
    page,
    difficulty,
    numberOfArchitecture,
    setDifficulty,
    setNumberOfArchitecture,
    architectureArr,
    startGame,
  };
};

export default useSetting;

export const getAllNoobProHackerInClient = async () => {
  const result = await (await fetch("/api/game")).json();

  return result;
};
