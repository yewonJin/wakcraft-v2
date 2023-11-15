import { Architect } from "@/domains/architect";
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
        return (
          architect.curTier === "그냥 눕" || architect.curTier === "진짜 눕"
        );
      }

      return architect.curTier === curCategory;
    });
  };

  return { curCategory, handleCategoryClick, filterByCategory };
};

export default useTierCategory;
