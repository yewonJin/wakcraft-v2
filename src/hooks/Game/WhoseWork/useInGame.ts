import { KeyboardEvent, useEffect, useRef, useState } from "react";

import { Architect } from "@/domains/architect";
import useSearch from "@/hooks/useSearch";
import { Question } from "./useSetting";

const useInGame = (architects: Architect[], architectureArr: Question[]) => {
  const { input, setInput, handleInputChange, highlightedArchitects } =
    useSearch(architects);

  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      if (!input || !highlightedArchitects[0]) return;

      setInput(highlightedArchitects[0].wakzoo_id);
    }

    if (e.key === "Enter") {
      if (highlightedArchitects.length > 1) return;
      onSubmit();
    }
  };

  const onSubmit = () => {
    // "?" 제출하면 문제 넘기기
    if (input === "?") {
      setShowAnswer(true);
      setInput("");
      return;
    }

    // 입력이 완료되지 않으면 제출 못함
    if (
      input.toLowerCase() !==
        highlightedArchitects[0].wakzoo_id.toLowerCase() &&
      input.toLowerCase() !==
        highlightedArchitects[0].minecraft_id.toLowerCase()
    ) {
      return;
    }

    // 정답이 아니면 다음 문제로 넘어가기
    if (
      highlightedArchitects[0].minecraft_id !==
      architectureArr[index].minecraft_id
    ) {
      setShowAnswer(true);
      setInput("");

      return;
    }

    setInput("");
    setCorrectCount((prev) => prev + 1);

    setShowAnswer(true);
  };

  const moveToNextAnswer = () => {
    setShowAnswer(false);
    setIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, [index]);

  useEffect(() => {
    if (!showAnswer) return;

    setTimeout(() => {
      nextButtonRef.current?.focus();
    }, 100);
  }, [showAnswer]);

  return {
    index,
    input,
    highlightedArchitects,
    setInput,
    showAnswer,
    nextButtonRef,
    handleInputChange,
    correctCount,
    inputRef,
    handleKeyDown,
    onSubmit,
    moveToNextAnswer,
  };
};

export default useInGame;
