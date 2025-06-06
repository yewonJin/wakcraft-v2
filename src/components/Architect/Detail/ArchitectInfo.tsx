"use client";

import { Fragment } from "react";

import usePortfolioCategory from "@/hooks/usePortfolioCategory";

import Category from "@/components/Architect/Detail/Category";
import Portfolio from "@/components/Architect/Detail/Portfolio";

import { Architect } from "@/domains/architect";
import ScrollToTop from "@/components/common/ScrollToTop";

type Props = {
  architect: Architect;
};

export default function ArchitectInfo(props: Props) {
  const { curCategory, handleCategoryClick } = usePortfolioCategory();

  const { architect } = props;

  return (
    <Fragment>
      <Category
        curCategory={curCategory}
        handleCategoryClick={handleCategoryClick}
        placementTest_link={architect.placementTest_link}
      />
      <Portfolio curCategory={curCategory} architect={architect} />
      <ScrollToTop />
    </Fragment>
  );
}
