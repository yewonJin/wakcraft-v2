"use client";

import Image from "next/image";

import SearchResult from "./SearchResult";
import { Architect } from "@/domains/architect";
import { Question } from "@/hooks/Game/WhoseWork/useSetting";
import { renameTo1080Webp } from "@/domains/noobprohacker";
import useInGame from "@/hooks/Game/WhoseWork/useInGame";

type Props = {
  architects: Architect[];
  architectureArr: Question[];
};

export default function InGame(props: Props) {
  const { architects, architectureArr } = props;

  const {
    index,
    input,
    setInput,
    highlightedArchitects,
    showAnswer,
    correctCount,
    handleInputChange,
    inputRef,
    handleKeyDown,
    onSubmit,
  } = useInGame(architects, architectureArr);

  return (
    <div className="mt-8">
      {index >= architectureArr.length && (
        <p className="text-lg text-text-primary">
          {"정답 개수 : " + correctCount}
        </p>
      )}
      {index < architectureArr.length && (
        <div className={`relative mx-auto aspect-video max-w-[900px]`}>
          <Image
            alt="작품 이미지"
            priority
            sizes="900px"
            fill
            src={renameTo1080Webp(architectureArr[index]?.image_url)}
          />
          {architectureArr[index + 1] && (
            <Image
              style={{ display: "none" }}
              alt="작품 이미지"
              priority
              sizes="900px"
              fill
              src={renameTo1080Webp(architectureArr[index + 1]?.image_url)}
            />
          )}
        </div>
      )}
      {showAnswer && (
        <div className="mx-auto flex w-[300px] items-end justify-center gap-2 pt-5 text-lg text-text-secondary">
          <p className="text-base">정답 :</p>
          <p className="text-text-primary">
            {
              architects.filter(
                (architect) =>
                  architect.minecraft_id ===
                  architectureArr[index].minecraft_id,
              )[0].wakzoo_id
            }
          </p>
          <p className="text-base">
            {
              architects.filter(
                (architect) =>
                  architect.minecraft_id ===
                  architectureArr[index].minecraft_id,
              )[0].minecraft_id
            }
          </p>
        </div>
      )}
      {index < architectureArr.length && (
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
