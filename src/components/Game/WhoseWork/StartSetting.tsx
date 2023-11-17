"use client";

import { Dispatch, SetStateAction } from "react";

import { medium } from "@/app/layout";
import ArrowDropUp from "../../../../public/icons/arrow_drop_up.svg";
import {
  Difficulty,
  NumberOfArchitecture,
} from "@/hooks/Game/WhoseWork/useSetting";

type Props = {
  startGame: () => void;
  difficulty: Difficulty;
  numberOfArchitecture: NumberOfArchitecture;
  setDifficulty: Dispatch<SetStateAction<Difficulty>>;
  setNumberOfArchitecture: Dispatch<SetStateAction<NumberOfArchitecture>>;
};

export default function StartSetting(props: Props) {
  const {
    startGame,
    difficulty,
    numberOfArchitecture,
    setDifficulty,
    setNumberOfArchitecture,
  } = props;

  return (
    <div>
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>
        건축가 맞추기
      </h1>
      <p className="mt-4 text-base text-text-secondary">
        작품 이미지를 보고 누가 건축했는지 맞추는 게임
      </p>
      <div className="mt-12 flex gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-text-primary">난이도</h2>
          <div className="relative flex gap-6">
            <div className="relative">
              <button
                onClick={() => setDifficulty("LOW")}
                className={`peer/low ${
                  difficulty === "LOW"
                    ? "bg-text-secondary  text-background-secondary"
                    : " text-text-secondary"
                } rounded-md border-2 border-background-secondary  p-2 px-5`}
              >
                하
              </button>
              <div className="invisible absolute top-16 rounded-lg bg-text-secondary p-2 px-3 text-background-secondary peer-hover/low:visible [&>svg]:absolute [&>svg]:-top-6 [&>svg]:left-[6px] [&>svg]:h-11 [&>svg]:w-11 [&>svg]:fill-text-secondary">
                <ArrowDropUp />
                <p className="w-max">눕프핵 해커 작품</p>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setDifficulty("MEDIUM")}
                className={`peer/medium ${
                  difficulty === "MEDIUM"
                    ? "bg-text-secondary  text-background-secondary"
                    : " text-text-secondary"
                } rounded-md border-2 border-background-secondary  p-2 px-5`}
              >
                중
              </button>
              <div className="invisible absolute top-16 rounded-lg bg-text-secondary p-2 px-3 text-background-secondary peer-hover/medium:visible [&>svg]:absolute [&>svg]:-top-6 [&>svg]:left-[6px] [&>svg]:h-11 [&>svg]:w-11 [&>svg]:fill-text-secondary">
                <ArrowDropUp />
                <p className="w-max">모든 해커 작품</p>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setDifficulty("HIGH")}
                className={`peer/high ${
                  difficulty === "HIGH"
                    ? "bg-text-secondary  text-background-secondary"
                    : " text-text-secondary"
                } rounded-md border-2 border-background-secondary  p-2 px-5`}
              >
                상
              </button>
              <div className="invisible absolute top-16 rounded-lg bg-text-secondary p-2 px-3 text-background-secondary peer-hover/high:visible [&>svg]:absolute [&>svg]:-top-6 [&>svg]:left-[6px] [&>svg]:h-11 [&>svg]:w-11 [&>svg]:fill-text-secondary">
                <ArrowDropUp />
                <p className="w-max">모든 해커 + 프로 작품</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-text-primary">작품 수</h2>
          <div className="flex gap-6">
            <button
              onClick={() => setNumberOfArchitecture(20)}
              className={`rounded-md border-2 border-background-secondary p-2 px-3 ${
                numberOfArchitecture === 20
                  ? "bg-text-secondary  text-background-secondary"
                  : " text-text-secondary"
              }`}
            >
              20개
            </button>
            <button
              onClick={() => setNumberOfArchitecture(30)}
              className={`rounded-md border-2 border-background-secondary p-2 px-3 ${
                numberOfArchitecture === 30
                  ? "bg-text-secondary  text-background-secondary"
                  : " text-text-secondary"
              }`}
            >
              30개
            </button>
            <button
              onClick={() => setNumberOfArchitecture(50)}
              className={`rounded-md border-2 border-background-secondary p-2 px-3 ${
                numberOfArchitecture === 50
                  ? "bg-text-secondary  text-background-secondary"
                  : " text-text-secondary"
              }`}
            >
              50개
            </button>
          </div>
        </div>
        <button
          className="mt-4 rounded-lg bg-background-secondary px-8 text-text-primary"
          onClick={() => startGame()}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
