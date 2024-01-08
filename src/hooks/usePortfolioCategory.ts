import { MouseEvent, useState } from "react";

export type Category = "전체보기" | "눕프로해커" | "배치고사" | "이벤트 눕프핵";

const usePortfolioCategory = () => {
  const [curCategory, setCurCategory] = useState<Category>("전체보기");

  const handleCategoryClick = (e: MouseEvent<HTMLButtonElement>) => {
    setCurCategory(e.currentTarget.dataset["value"] as Category);
  };

  return { curCategory, handleCategoryClick };
};

export default usePortfolioCategory;
