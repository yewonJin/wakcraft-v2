import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

import { shuffle } from "@/utils/lib";
import { WhoseWork } from "@/domains/whoseWork";
import {
  difficultyState,
  numberOfArchitectureState,
  correctCountState,
  indexState,
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
  const [correctCount, setCorrectCount] = useRecoilState(correctCountState);
  const [index, setIndex] = useRecoilState(indexState);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [whoseWork, setWhoseWork] = useState<WhoseWork>();

  const { refetch } = useQuery(
    ["getWhoseWorkArchitectures"],
    () => getArchitectures(difficulty),
    {
      enabled: false,
    },
  );

  const startGame = async () => {
    if (difficulty === null || numberOfArchitecture === null) return;

    toast.loading("게임을 만드는 중입니다...", { id: "whoseWork_loading" });

    await refetch().then((res) => {
      setQuestions(shuffle(res.data).slice(0, numberOfArchitecture));
      toast.remove("whoseWork_loading");
    });

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

  const restartGame = async () => {
    setIndex(0);
    setCorrectCount(0);
    setPage(0);

    await startGame();
  };

  return {
    page,
    questions,
    startGame,
    endGame,
    restartGame,
    whoseWork,
  };
};

export default useSetting;
