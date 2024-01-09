"use client";

import { Fragment } from "react";

import useFilteringByTier from "@/hooks/useFilteringByTier";
import useSortArchitect from "@/hooks/useSortArchitect";
import useSearch from "@/hooks/useSearch";

import Search from "../../common/Input/SearchInput";
import Sort from "./Sort";
import FilteringByTier from "./FilteringByTier";
import ArchitectList from "./ArchitectList";
import ScrollToTop from "../../common/ScrollToTop";

import { Architect } from "@/domains/architect";

type Props = {
  architects: Architect[];
};

export default function Main(props: Props) {
  const { architects } = props;

  const { curCategory, handleCategoryClick, filteredArchitectsByTier } =
    useFilteringByTier();
  const { sortBy, isDescending, handleSortClick, sortedArchitects } =
    useSortArchitect(architects);
  const { input, handleInputChange, highlightedArchitects } = useSearch(
    filteredArchitectsByTier(sortedArchitects),
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
      <FilteringByTier
        curCategory={curCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <ArchitectList input={input} architects={highlightedArchitects} />
      <ScrollToTop />
    </Fragment>
  );
}
