import { useRecoilState } from "recoil";

import { Architect } from "@/domains/architect";
import { curCategoryState } from "@/store/sort";

const useFilteringByTier = () => {
  const [curCategory, setCurCategory] = useRecoilState(curCategoryState);

  const handleCategoryClick = (tier: string) => {
    if (curCategory === tier) {
      setCurCategory("");
      return;
    }

    setCurCategory(tier);
  };

  const filteredArchitectsByTier = (arr: Architect[]) => {
    return arr.filter((architect) => {
      if (curCategory === "") {
        return true;
      }

      return architect.curTier === curCategory;
    });
  };

  return { curCategory, handleCategoryClick, filteredArchitectsByTier };
};

export default useFilteringByTier;
