"use client";

import { MouseEvent } from "react";

import { Category } from "@/hooks/usePortfolioCategory";

type Props = {
  curCategory: Category;
  handleCategoryClick: (e: MouseEvent<HTMLLIElement>) => void;
};

export default function Category(props: Props) {
  const { curCategory, handleCategoryClick } = props;

  return (
    <div
      className={
        "mt-8 overflow-x-scroll md:overflow-x-auto " + "category-scrollbar"
      }
    >
      <ul className="flex w-max items-center gap-3 pb-4 text-sm text-text-primary md:flex-wrap md:gap-4 md:overflow-x-hidden md:text-base">
        <li
          className={`w-max rounded-lg p-2 px-4 duration-300 hover:cursor-pointer ${
            curCategory === "전체보기"
              ? "bg-text-secondary text-background-secondary"
              : " bg-background-secondary hover:bg-background-tertiary"
          }`}
          data-value={"전체보기"}
          onClick={handleCategoryClick}
        >
          전체보기
        </li>
        <li
          className={`w-max rounded-lg p-2 px-4 duration-300 hover:cursor-pointer ${
            curCategory === "눕프로해커"
              ? "bg-text-secondary text-background-secondary"
              : " bg-background-secondary hover:bg-background-tertiary"
          }`}
          data-value={"눕프로해커"}
          onClick={handleCategoryClick}
        >
          눕프로해커
        </li>
        <li
          className={`w-max rounded-lg p-2 px-4 duration-300 hover:cursor-pointer ${
            curCategory === "배치고사"
              ? "bg-text-secondary text-background-secondary"
              : " bg-background-secondary hover:bg-background-tertiary"
          }`}
          data-value={"배치고사"}
          onClick={handleCategoryClick}
        >
          배치고사
        </li>
        <li
          className={`w-max rounded-lg p-2 px-4 duration-300 hover:cursor-pointer ${
            curCategory === "이벤트 눕프핵"
              ? "bg-text-secondary text-background-secondary"
              : " bg-background-secondary hover:bg-background-tertiary"
          }`}
          data-value={"이벤트 눕프핵"}
          onClick={handleCategoryClick}
        >
          이벤트 눕프핵
        </li>
      </ul>
    </div>
  );
}
