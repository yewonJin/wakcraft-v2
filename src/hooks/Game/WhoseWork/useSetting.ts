import { useState } from "react";
import { useRecoilValue } from "recoil";

import { shuffle } from "@/utils/lib";
import { WhoseWork } from "@/domains/whoseWork";
import {
  difficultyState,
  numberOfArchitectureState,
  correctCountState,
} from "@/store/whoseWork";
import {
  getArchitectures,
  increaseCorrectAnswerCount,
} from "@/api/client/whoseWork";

export type Question = {
  minecraft_id: string;
  image_url: string;
};

const useSetting = () => {
  const [page, setPage] = useState(0);

  const difficulty = useRecoilValue(difficultyState);
  const numberOfArchitecture = useRecoilValue(numberOfArchitectureState);
  const correctCount = useRecoilValue(correctCountState);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [whoseWork, setWhoseWork] = useState<WhoseWork>();

  const startGame = async () => {
    if (difficulty === null || numberOfArchitecture === null) return;

    const architectures: Question[] = await getArchitectures(difficulty);

    setQuestions(shuffle(architectures).slice(0, numberOfArchitecture));

    setPage((prev) => prev + 1);
  };

  const endGame = async () => {
    await increaseCorrectAnswerCount(
      difficulty,
      numberOfArchitecture,
      correctCount,
    ).then((res) => setWhoseWork(res));

    setPage(2);
  };

  return {
    page,
    questions,
    startGame,
    endGame,
    whoseWork,
  };
};

export default useSetting;
