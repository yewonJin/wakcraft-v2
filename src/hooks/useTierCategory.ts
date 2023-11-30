import { useRecoilState } from "recoil";

import { Architect } from "@/domains/architect";
import { curCategoryState } from "@/store/sort";

const useTierCategory = () => {
  const [curCategory, setCurCategory] = useRecoilState(curCategoryState);

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
