"use client";

import { MouseEvent } from "react";

import { Category } from "@/hooks/usePortfolioCategory";
import Button from "@/components/common/Button/Button";

type Props = {
  curCategory: Category;
  handleCategoryClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function Category(props: Props) {
  const { curCategory, handleCategoryClick } = props;

  return (
    <div
      className={
        "mt-8 overflow-x-scroll md:overflow-x-auto " + "category-scrollbar"
      }
    >
      <div className="flex w-max items-center gap-3 pb-4 text-sm text-text-primary md:flex-wrap md:gap-4 md:overflow-x-hidden md:text-base">
        {["전체보기", "눕프로해커", "배치고사", "이벤트 눕프핵"].map((item) => (
          <Button
            key={item}
            isClicked={curCategory === item}
            handleButtonClick={handleCategoryClick}
            value={item}
            data-value={item}
          />
        ))}
      </div>
    </div>
  );
}
