import { ChangeEvent, useCallback, useMemo, useState } from "react";

import { Architect } from "@/domains/architect";
import { fuzzySearch, fuzzySearchRegExp } from "@/utils/lib";

const useSearch = (architects: Architect[]) => {
  const [input, setInput] = useState("");

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const resetInput = useCallback(() => {
    setInput("");
  }, []);

  const generateIndexOfMatches = useCallback(
    (id: string) => {
      const inputCharArr = input.toLowerCase().split("");

      const indexArr: number[] = [];

      let i = 0;

      inputCharArr.forEach((inputChar) => {
        if (inputChar.match(/[ㄱ-힣]/g)) {
          const result = id.match(fuzzySearchRegExp(inputChar));

          if (!result) return;

          indexArr.push(result.index as number);
        }

        i = id.toLowerCase().indexOf(inputChar, i);
        indexArr.push(i++);
      });

      return indexArr;
    },
    [input],
  );

  const filterByFuzzySearch = useCallback(
    (arr: Architect[]) => {
      return arr.filter(
        (item) =>
          fuzzySearch(item.minecraft_id.toLowerCase(), input.toLowerCase()) ||
          fuzzySearch(item.wakzoo_id.toLowerCase(), input.toLowerCase()),
      );
    },
    [input],
  );

  const highlighting = useCallback(
    (arr: Architect[]) => {
      return arr
        .map((architect) => ({
          ...architect,
          minecraftIdIndexArr: generateIndexOfMatches(architect.minecraft_id),
          wakzooIdIndexArr: generateIndexOfMatches(architect.wakzoo_id),
        }))
        .sort((a, b) => {
          if (a.minecraftIdIndexArr.includes(-1)) {
            return (
              parseInt(a.wakzooIdIndexArr.join("")) -
              parseInt(b.minecraftIdIndexArr.join(""))
            );
          }

          return (
            parseInt(a.minecraftIdIndexArr.join("")) -
            parseInt(b.minecraftIdIndexArr.join(""))
          );
        });
    },
    [input],
  );

  const highlightedArchitects = useMemo(
    () => highlighting(filterByFuzzySearch(architects)),
    [input, architects],
  );

  return { input, handleInputChange, resetInput, highlightedArchitects };
};

export default useSearch;
