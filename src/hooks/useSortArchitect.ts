import { Architect, tierArray } from "@/domains/architect";
import { useState, MouseEvent, useMemo } from "react";

const useSortArchitect = (architects: Architect[]) => {
  const [sortBy, setSortBy] = useState<SortBy>("tier");
  const [isDescending, setIsDescending] = useState(true);

  const handleSortClick = (e: MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.dataset["value"] as SortBy;

    if (sortBy === value) {
      setIsDescending((prev) => !prev);
      return;
    }

    setIsDescending(true);
    setSortBy(value);
  };

  const sortedArchitects = useMemo(() => {
    if (sortBy === "tier") {
      const result = architects.sort((a, b) => {
        if (a.curTier === b.curTier) {
          return a["minecraft_id"].localeCompare(b["minecraft_id"]);
        }

        return isDescending
          ? tierArray.indexOf(a.curTier) - tierArray.indexOf(b.curTier)
          : tierArray.indexOf(b.curTier) - tierArray.indexOf(a.curTier);
      });

      return result;
    }

    const result = architects.sort((a, b) => {
      if (a.noobprohackerInfo[sortBy] === b.noobprohackerInfo[sortBy]) {
        return a["minecraft_id"].localeCompare(b["minecraft_id"]);
      }

      return isDescending
        ? b.noobprohackerInfo[sortBy] - a.noobprohackerInfo[sortBy]
        : a.noobprohackerInfo[sortBy] - b.noobprohackerInfo[sortBy];
    });

    return result;
  }, [sortBy, isDescending]);

  return { sortBy, isDescending, handleSortClick, sortedArchitects };
};

export default useSortArchitect;

export type SortBy = "tier" | "participation" | "win" | "hackerWin" | "proWin";
