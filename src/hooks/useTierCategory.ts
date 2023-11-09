import { useState } from "react";

const useTierCategory = () => {
  const [curCategory, setCurCategory] = useState("");

  const handleCategoryClick = (tier: string) => {
    if (curCategory === tier) {
      setCurCategory("");
      return;
    }

    setCurCategory(tier);
  };

  const filterByCategory = (arr: Architect[]) => {
    return arr.filter((architect) => {
      if (curCategory === "") {
        return true;
      }

      if (curCategory === "눕") {
        return architect.tier === "그냥 눕" || architect.tier === "진짜 눕";
      }

      return architect.tier === curCategory;
    });
  };

  return { curCategory, handleCategoryClick, filterByCategory };
};

export default useTierCategory;

// Temp Type
type Architect = {
  minecraft_id: string;
  tier: string;
  wakzoo_id: string;
  participation: number;
  win: number;
  hackerWin: number;
  proWin: number;
};
