"use client";

import { Fragment } from "react";

import Category from "@/components/Architect/DetailPage/Category";
import Portfolio from "@/components/Architect/DetailPage/Portfolio";
import usePortfolioCategory from "@/hooks/usePortfolioCategory";
import { Architect } from "@/domains/architect";

type Props = {
  architect: Architect;
};

export default function Main(props: Props) {
  const { curCategory, handleCategoryClick } = usePortfolioCategory();

  const { architect } = props;

  return (
    <Fragment>
      <Category
        curCategory={curCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <Portfolio curCategory={curCategory} architect={architect} />
    </Fragment>
  );
}
