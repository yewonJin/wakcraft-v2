import { useState } from "react";

import { shuffle } from "@/utils/lib";
import { WhoseWork } from "@/domains/whoseWork";

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
  const [whoseWork, setWhoseWork] = useState<WhoseWork>();

  const startGame = async () => {
    if (difficulty === null || numberOfArchitecture === null) return;

    const architectures: Question[] = await getArchitectures(difficulty);

    setArchitectureArr(shuffle(architectures).slice(0, numberOfArchitecture));

    setPage((prev) => prev + 1);
  };

  const endGame = async () => {
    await increaseCorrectAnswerCount().then((res) => setWhoseWork(res));

    setPage(2);
  };

  const resetGame = () => {
    setDifficulty(null);
    setNumberOfArchitecture(null);
    setArchitectureArr([]);
    setIndex(0);
    setCorrectCount(0);
    setPage(0);
  };

  const increaseCorrectAnswerCount = async () => {
    const res = await (
      await fetch(
        `/api/game/whose_work?difficulty=${difficulty}&numberOfArchitecture=${numberOfArchitecture}&correctCount=${correctCount}`,
        {
          method: "PATCH",
        },
      )
    ).json();

    return res;
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
    resetGame,
    whoseWork,
  };
};

export default useSetting;

const getArchitectures = async (difficulty: Difficulty) => {
  const result = await (
    await fetch(`/api/game/whose_work?difficulty=${difficulty}`)
  ).json();

  return result;
};
