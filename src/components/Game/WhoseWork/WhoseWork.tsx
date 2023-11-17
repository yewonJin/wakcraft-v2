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
    numberOfArchitecture,
    setDifficulty,
    setNumberOfArchitecture,
    startGame,
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
          <InGame architects={architects} architectureArr={architectureArr} />
        );

      case 2:
        return <Score />;
    }
  };

  return <div className="mx-auto max-w-[1200px]">{gameProgression()}</div>;
}
