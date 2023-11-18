"use client";

import { Architect } from "@/domains/architect";
import StartSetting from "./StartSetting";
import InGame from "./InGame";
import Score from "./Score";
import useSetting from "@/hooks/Game/WhoseWork/useSetting";

type Props = {
  architects: Architect[];
};

export default function WhoseWork(props: Props) {
  const { architects } = props;

  const {
    page,
    difficulty,
    index,
    increaseIndex,
    numberOfArchitecture,
    correctCount,
    increaseCorrectCount,
    setDifficulty,
    setNumberOfArchitecture,
    startGame,
    endGame,
    architectureArr,
  } = useSetting();

  const gameProgression = () => {
    switch (page) {
      case 0:
        return (
          <StartSetting
            startGame={startGame}
            difficulty={difficulty}
            numberOfArchitecture={numberOfArchitecture}
            setDifficulty={setDifficulty}
            setNumberOfArchitecture={setNumberOfArchitecture}
          />
        );

      case 1:
        return (
          <InGame
            architects={architects}
            architectureArr={architectureArr}
            index={index}
            increaseIndex={increaseIndex}
            increaseCorrectCount={increaseCorrectCount}
            endGame={endGame}
          />
        );

      case 2:
        return <Score correctCount={correctCount} />;
    }
  };

  return <div className="mx-auto max-w-[1200px]">{gameProgression()}</div>;
}
