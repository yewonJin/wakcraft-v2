"use client";

import { Architect } from "@/domains/architect";
import StartSetting from "./StartSetting";
import InGame from "./InGame";
import Score from "./Score";
import useSetting from "@/hooks/Game/WhoseWork/useSetting";
import { WhoseWork } from "@/domains/whoseWork";

type Props = {
  architects: Architect[];
};

export default function WhoseWork(props: Props) {
  const { architects } = props;

  const { page, startGame, questions, endGame, whoseWork } = useSetting();

  const gameProgression = () => {
    switch (page) {
      case 0:
        return <StartSetting startGame={startGame} />;

      case 1:
        return (
          <InGame
            architects={architects}
            questions={questions}
            endGame={endGame}
          />
        );

      case 2:
        return <Score whoseWork={whoseWork as WhoseWork} />;
    }
  };

  return <div className="mx-auto max-w-[1200px]">{gameProgression()}</div>;
}
