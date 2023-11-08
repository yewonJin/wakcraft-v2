"use client";

import { Fragment } from "react";

import Search from "./Search";
import Sort from "./Sort";
import ArchitectList from "./ArchitectList";
import useTierCategory from "@/hooks/useTierCategory";
import TierCategory from "./TierCategory";
import useSortArchitect from "@/hooks/useSortArchitect";

export default function Main() {
  const { curCategory, handleCategoryClick } = useTierCategory();
  const { sortBy, isDescending, handleSortClick, sortedArr } =
    useSortArchitect();

  return (
    <Fragment>
      <div className="mt-8 flex w-full flex-wrap justify-between gap-4 lg:h-[40px] lg:flex-nowrap">
        <Search />
        <Sort
          isDescending={isDescending}
          sortBy={sortBy}
          handleSortClick={handleSortClick}
        />
      </div>
      <TierCategory
        curCategory={curCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <ArchitectList sortedArr={sortedArr} curCategory={curCategory} />
    </Fragment>
  );
}
