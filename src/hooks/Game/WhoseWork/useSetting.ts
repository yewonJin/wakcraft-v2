import { useEffect, useState } from "react";

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
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const startGame = async () => {
    if (difficulty === null || numberOfArchitecture === null) return;

    const architectures: Question[] = await getArchitectures(difficulty);

    setArchitectureArr(shuffle(architectures).slice(0, numberOfArchitecture));

    setPage((prev) => prev + 1);
  };

  const endGame = () => {
    increaseCorrectAnswerCount();

    setPage(2);
  };

  const increaseCorrectAnswerCount = async () => {
    await fetch(
      `/api/game?difficulty=${difficulty}&numberOfArchitecture=${numberOfArchitecture}&correctCount=${correctCount}`,
      {
        method: "PATCH",
      },
    );
  };

  const increaseCorrectCount = () => {
    setCorrectCount((prev) => prev + 1);
  };

  const increaseIndex = () => {
    setIndex((prev) => prev + 1);
  };

  return {
    page,
    difficulty,
    index,
    increaseIndex,
    numberOfArchitecture,
    correctCount,
    increaseCorrectCount,
    setDifficulty,
    setNumberOfArchitecture,
    architectureArr,
    startGame,
    endGame,
  };
};

export default useSetting;

const getArchitectures = async (difficulty: Difficulty) => {
  const result = await (
    await fetch(`/api/game?difficulty=${difficulty}`)
  ).json();

  return result;
};
