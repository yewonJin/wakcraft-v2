import { tierArray } from "@/domains/architect";
import { useState, MouseEvent, useMemo } from "react";

const useSortArchitect = () => {
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

  const sortedArr = useMemo(() => {
    if (sortBy === "tier") {
      const result = arr.sort((a, b) => {
        if (a.tier === b.tier) {
          return a["minecraft_id"].localeCompare(b["minecraft_id"]);
        }

        return isDescending
          ? tierArray.indexOf(a.tier) - tierArray.indexOf(b.tier)
          : tierArray.indexOf(b.tier) - tierArray.indexOf(a.tier);
      });

      return result;
    }

    const result = arr.sort((a, b) => {
      if (a[sortBy] === b[sortBy]) {
        return a["minecraft_id"].localeCompare(b["minecraft_id"]);
      }

      return isDescending ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
    });

    return result;
  }, [sortBy, isDescending]);

  return { sortBy, isDescending, handleSortClick, sortedArr };
};

export default useSortArchitect;

// Mock Data
const arr = [
  {
    minecraft_id: "canindaeyo",
    wakzoo_id: "캔인데요",
    tier: "마카게",
    participation: 5,
    win: 3,
    hackerWin: 3,
    proWin: 0,
  },
  {
    minecraft_id: "number198",
    wakzoo_id: "198번",
    tier: "마카게",
    participation: 8,
    win: 5,
    hackerWin: 2,
    proWin: 0,
  },
  {
    minecraft_id: "dackbal",
    wakzoo_id: "닼발",
    tier: "오마카세",
    participation: 5,
    win: 5,
    hackerWin: 2,
    proWin: 3,
  },
  {
    minecraft_id: "doromo",
    wakzoo_id: "도로모",
    tier: "진짜 눕",
    participation: 2,
    win: 2,
    hackerWin: 0,
    proWin: 2,
  },
];

export type SortBy = "tier" | "participation" | "win" | "hackerWin" | "proWin";
