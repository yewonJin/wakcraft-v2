import { useState } from "react";

import { shuffle } from "@/utils/lib";
import { Architect } from "@/domains/architect";

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

    const architectures: Question[] = await getArchitectures(difficulty);

    setArchitectureArr(shuffle(architectures).slice(0, numberOfArchitecture));

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

const getArchitectures = async (difficulty: Difficulty) => {
  const result = await (
    await fetch(`/api/game?difficulty=${difficulty}`)
  ).json();

  return result;
};
