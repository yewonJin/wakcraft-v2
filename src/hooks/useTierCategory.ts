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

  return { curCategory, handleCategoryClick };
};

export default useTierCategory;
