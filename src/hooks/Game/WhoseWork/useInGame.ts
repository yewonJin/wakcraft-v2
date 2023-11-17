import { Architect } from "@/domains/architect";
import useSearch from "@/hooks/useSearch";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Question } from "./useSetting";

const useInGame = (architects: Architect[], architectureArr: Question[]) => {
  const { input, setInput, handleInputChange, highlightedArchitects } =
    useSearch(architects);

  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
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

      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setShowAnswer(false);
      }, 1000);
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

      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setShowAnswer(false);
      }, 1000);
      return;
    }

    setInput("");
    setCorrectCount((prev) => prev + 1);

    setShowAnswer(true);

    setTimeout(() => {
      setIndex((prev) => prev + 1);
      setShowAnswer(false);
    }, 1000);
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, [index]);

  return {
    index,
    input,
    highlightedArchitects,
    setInput,
    showAnswer,
    handleInputChange,
    correctCount,
    inputRef,
    handleKeyDown,
    onSubmit,
  };
};

export default useInGame;
