import { MouseEvent } from "react";

import { SortBy } from "@/store/sort";
import SortButton from "../../common/Button/SortButton";

type Props = {
  sortBy: SortBy;
  isDescending: boolean;
  handleSortClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function Sort(props: Props) {
  const { sortBy, isDescending, handleSortClick } = props;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {SORT_ENG.map((sort, index) => (
        <SortButton
          key={sort}
          handleButtonClick={handleSortClick}
          data-value={sort}
          value={SORT_KOR[index]}
          isClicked={sortBy === sort}
          isDescending={isDescending}
        />
      ))}
    </div>
  );
}

const SORT_ENG = ["tier", "participation", "win", "hackerWin", "proWin"];
const SORT_KOR = ["티어", "참여 횟수", "총 우승", "해커 우승", "프로 우승"];
