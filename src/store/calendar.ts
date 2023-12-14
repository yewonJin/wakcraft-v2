import { atom } from "recoil";

export const curMonthState = atom<number>({
  key: "curMonthState",
  default: new Date().getMonth() + 1,
});

export const curYearState = atom<number>({
  key: "curYearState",
  default: new Date().getFullYear(),
});
