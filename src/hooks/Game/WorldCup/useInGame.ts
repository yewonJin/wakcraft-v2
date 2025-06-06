import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Worldcup } from "@/domains/worldCup";
import { getWorldCups } from "@/api/client/worldCup";
import { shuffle } from "@/utils/lib";
import { RoundOfNumber } from "./useSetting";
import { useSetRecoilState } from "recoil";
import { winnerState } from "@/store/worldCup";

const useInGame = (roundOfNumber: RoundOfNumber, endGame: () => void) => {
  const [isMounted, setisMoundted] = useState<boolean>(false);
  const [isClickable, setIsClickable] = useState(true);
  const [selectedPos, setSelectedPos] = useState<"" | "left" | "right">("");

  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState<Worldcup[]>();
  const [curRoundQuestions, setCurRoundQuestions] = useState<Worldcup[]>([]);
  const [nextRoundQuestions, setNextRoundQuestions] = useState<Worldcup[]>([]);

  const setWinner = useSetRecoilState(winnerState);

  const [player, setPlayer] = useState({
    left: false,
    right: false,
  });

  const { data } = useQuery(["getWorldCups"], getWorldCups);

  useEffect(() => {
    setisMoundted(true);
  }, []);

  useEffect(() => {
    if (!data) return;

    const arr = shuffle(data).slice(0, roundOfNumber) as Worldcup[];

    setQuestions(arr);
    setCurRoundQuestions(arr);
  }, [data]);

  const onQustionClick = (
    selectedPos: "left" | "right",
    question: Worldcup,
  ) => {
    if (!isClickable) return;

    if (isFinalRound) {
      setWinner(question);
      endGame();
      return;
    }

    if (isLastRound) {
      setNextRound(question, selectedPos);
      return;
    }

    // 다음 라운드 배열에 추가
    setNextRoundQuestions([...nextRoundQuestions, question]);

    setSelectedPos(selectedPos);
    setIsClickable(false);
    stopAllPlayer();

    setTimeout(() => {
      setSelectedPos("");
      setIndex((prev) => prev + 2);
    }, 1800);

    setTimeout(() => {
      setIsClickable(true);
    }, 2000);
  };
  const isLastRound = index >= curRoundQuestions.length - 2;
  const isFinalRound = curRoundQuestions.length === 2;
  const setNextRound = (question: Worldcup, selectedPos: "left" | "right") => {
    setSelectedPos(selectedPos);
    setIsClickable(false);
    stopAllPlayer();

    setTimeout(() => {
      setSelectedPos("");
      setCurRoundQuestions(shuffle([...nextRoundQuestions, question]));
      setNextRoundQuestions([]);

      setIndex(0);
    }, 1800);

    setTimeout(() => {
      setIsClickable(true);
    }, 2000);
  };
  const stopAllPlayer = () => {
    setPlayer({ left: false, right: false });
  };

  const togglePlayer = (pos: "left" | "right") => {
    setPlayer((prev) => ({ ...prev, [pos]: !prev[pos] }));
  };

  return {
    isMounted,
    index,
    selectedPos,
    onQustionClick,
    player,
    togglePlayer,
    curRoundQuestions,
  };
};

export default useInGame;
