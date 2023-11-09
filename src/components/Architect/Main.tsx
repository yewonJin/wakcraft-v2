"use client";

import { Fragment } from "react";

import Search from "./Search";
import Sort from "./Sort";
import TierCategory from "./TierCategory";
import ArchitectList from "./ArchitectList";
import useTierCategory from "@/hooks/useTierCategory";
import useSortArchitect from "@/hooks/useSortArchitect";
import useSearch from "@/hooks/useSearch";

export default function Main() {
  const { curCategory, handleCategoryClick, filterByCategory } =
    useTierCategory();
  const { sortBy, isDescending, handleSortClick, sortedArchitects } =
    useSortArchitect();
  const { input, handleInputChange, highlightedArchitects } = useSearch(
    filterByCategory(sortedArchitects),
  );

  return (
    <Fragment>
      <div className="mt-8 flex w-full flex-wrap justify-between gap-4 lg:h-[40px] lg:flex-nowrap">
        <Search input={input} handleInputChange={handleInputChange} />
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
      <ArchitectList architects={highlightedArchitects} />
    </Fragment>
  );
}
