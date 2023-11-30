import { MouseEvent } from "react";

import ArrowDown from "../../../public/icons/arrow_down.svg";
import { SortBy } from "@/store/sort";

type Props = {
  sortBy: SortBy;
  isDescending: boolean;
  handleSortClick: (e: MouseEvent<HTMLLIElement>) => void;
};

export default function Sort(props: Props) {
  const { sortBy, isDescending, handleSortClick } = props;

  return (
    <ul className="flex flex-wrap items-center gap-3">
      <li
        onClick={handleSortClick}
        className="flex rounded-md bg-background-secondary p-2 px-3 text-text-secondary hover:cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary [&>svg]:duration-100"
        data-value="tier"
        style={{
          backgroundColor: sortBy === "tier" ? "#881337" : "",
          color: sortBy === "tier" ? "white" : "",
        }}
      >
        티어
        <ArrowDown
          style={{
            fill: sortBy === "tier" ? "white" : "",
            transform:
              sortBy === "tier" && !isDescending ? "rotate(180deg)" : "",
          }}
        />
      </li>
      <li
        onClick={handleSortClick}
        className="flex rounded-md bg-background-secondary p-2 px-3 text-text-secondary hover:cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary [&>svg]:duration-100"
        data-value="participation"
        style={{
          backgroundColor: sortBy === "participation" ? "#881337" : "",
          color: sortBy === "participation" ? "white" : "",
        }}
      >
        참여 횟수
        <ArrowDown
          style={{
            fill: sortBy === "participation" ? "white" : "",
            transform:
              sortBy === "participation" && !isDescending
                ? "rotate(180deg)"
                : "",
          }}
        />
      </li>
      <li
        onClick={handleSortClick}
        className="flex rounded-md bg-background-secondary p-2 px-3 text-text-secondary hover:cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary [&>svg]:duration-100"
        data-value="win"
        style={{
          backgroundColor: sortBy === "win" ? "#881337" : "",
          color: sortBy === "win" ? "white" : "",
        }}
      >
        총 우승
        <ArrowDown
          style={{
            fill: sortBy === "win" ? "white" : "",
            transform:
              sortBy === "win" && !isDescending ? "rotate(180deg)" : "",
          }}
        />
      </li>
      <li
        onClick={handleSortClick}
        className="flex rounded-md bg-background-secondary p-2 px-3 text-text-secondary hover:cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary [&>svg]:duration-100"
        data-value="hackerWin"
        style={{
          backgroundColor: sortBy === "hackerWin" ? "#881337" : "",
          color: sortBy === "hackerWin" ? "white" : "",
        }}
      >
        해커 우승
        <ArrowDown
          style={{
            fill: sortBy === "hackerWin" ? "white" : "",
            transform:
              sortBy === "hackerWin" && !isDescending ? "rotate(180deg)" : "",
          }}
        />
      </li>
      <li
        onClick={handleSortClick}
        className="flex rounded-md bg-background-secondary p-2 px-3 text-text-secondary hover:cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary [&>svg]:duration-100"
        data-value="proWin"
        style={{
          backgroundColor: sortBy === "proWin" ? "#881337" : "",
          color: sortBy === "proWin" ? "white" : "",
        }}
      >
        프로 우승
        <ArrowDown
          style={{
            fill: sortBy === "proWin" ? "white" : "",
            transform:
              sortBy === "proWin" && !isDescending ? "rotate(180deg)" : "",
          }}
        />
      </li>
    </ul>
  );
}
