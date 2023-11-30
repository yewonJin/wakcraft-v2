import { atom } from "recoil";

export const curCategoryState = atom({
  key: "curCategoryState",
  default: "",
});

export const sortByState = atom<SortBy>({
  key: "sortByState",
  default: "tier",
});

export type SortBy = "tier" | "participation" | "win" | "hackerWin" | "proWin";
