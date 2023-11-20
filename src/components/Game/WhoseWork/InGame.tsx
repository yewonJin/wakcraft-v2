"use client";

import Image from "next/image";

import SearchResult from "./SearchResult";
import { Architect } from "@/domains/architect";
import { Question } from "@/hooks/Game/WhoseWork/useSetting";
import { renameTo1080Webp } from "@/domains/noobprohacker";
import useInGame from "@/hooks/Game/WhoseWork/useInGame";

type Props = {
  architects: Architect[];
  questions: Question[];
  endGame: () => void;
};

export default function InGame(props: Props) {
  const { architects, questions, endGame } = props;

  const {
    input,
    setInput,
    index,
    highlightedArchitects,
    showAnswer,
    handleInputChange,
    nextButtonRef,
    inputRef,
    handleKeyDown,
    moveToNextAnswer,
    onSubmit,
  } = useInGame(architects, questions, endGame);

  return (
    <div className="mt-8">
      {index < questions.length && (
        <div className={`relative mx-auto aspect-video max-w-[1200px]`}>
          <Image
            alt="작품 이미지"
            priority
            sizes="1200px"
            fill
            src={renameTo1080Webp(questions[index]?.image_url)}
          />
          {questions[index + 1] && (
            <Image
              style={{ display: "none" }}
              alt="작품 이미지"
              priority
              sizes="1200px"
              fill
              src={renameTo1080Webp(questions[index + 1]?.image_url)}
            />
          )}
        </div>
      )}
      {showAnswer ? (
        <div className="mx-auto flex h-[70px] w-[400px] items-center justify-center gap-2 pt-8 text-lg text-text-secondary">
          <p className="text-base">정답 :</p>
          <p className="text-text-primary">
            {
              architects.filter(
                (architect) =>
                  architect.minecraft_id === questions[index].minecraft_id,
              )[0].wakzoo_id
            }
          </p>
          <p className="text-base">
            {
              architects.filter(
                (architect) =>
                  architect.minecraft_id === questions[index].minecraft_id,
              )[0].minecraft_id
            }
          </p>
          <button
            ref={nextButtonRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                moveToNextAnswer();
              }
            }}
            onClick={() => moveToNextAnswer()}
            className={`ml-5 h-full rounded-md border-2 border-background-secondary px-3 outline-none hover:bg-background-secondary`}
          >
            다음
          </button>
        </div>
      ) : (
        <div className="mx-auto mt-8 flex max-w-[900px] justify-center gap-4">
          <div className="relative">
            <input
              ref={inputRef}
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
              value={input}
              className="h-[48px] w-[300px] border-2 border-background-tertiary bg-background-secondary pl-3 text-text-secondary outline-none"
            />
            <SearchResult
              input={input}
              setInput={setInput}
              highlightedArchitects={highlightedArchitects}
            />
          </div>
          <button
            onClick={() => {
              if (highlightedArchitects.length > 1) return;

              onSubmit();
            }}
            className={`rounded-md border-2 border-background-secondary px-3 ${
              input.toLowerCase() ===
                highlightedArchitects[0]?.wakzoo_id.toLowerCase() ||
              input.toLowerCase() ===
                highlightedArchitects[0]?.minecraft_id.toLowerCase() ||
              input === "?"
                ? "bg-background-secondary text-text-primary"
                : "text-background-tertiary  hover:cursor-default"
            } outline-none`}
          >
            제출
          </button>
        </div>
      )}
    </div>
  );
}
