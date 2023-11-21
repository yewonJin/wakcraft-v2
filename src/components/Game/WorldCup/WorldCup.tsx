"use client";

import InGame from "./InGame";
import GameSetting from "./GameSetting";
import useSetting from "@/hooks/Game/WorldCup/useSetting";
import Winner from "./Winner";

export default function WorldCup() {
  const { page, roundOfNumber, setRoundOfNumber, startGame, endGame } =
    useSetting();

  if (page === 0) {
    return (
      <GameSetting
        roundOfNumber={roundOfNumber}
        setRoundOfNumber={setRoundOfNumber}
        startGame={startGame}
      />
    );
  } else if (page === 1) {
    return <InGame roundOfNumber={roundOfNumber} endGame={endGame} />;
  } else if (page === 2) {
    return <Winner />;
  }
}
