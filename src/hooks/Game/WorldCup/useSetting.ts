import { useState } from "react";

export type RoundOfNumber = 128 | 64 | 32 | 16;

const useSetting = () => {
  const [page, setPage] = useState(0);

  const [roundOfNumber, setRoundOfNumber] = useState<RoundOfNumber>(128);

  const startGame = () => {
    setPage(1);
  };

  const endGame = () => {
    setPage(2);
  };

  return { page, roundOfNumber, setRoundOfNumber, startGame, endGame };
};

export default useSetting;
