import { atom } from "recoil";

const curr = new Date();
const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
export const kr_curr = new Date(utc + KR_TIME_DIFF);

export const curMonthState = atom<number>({
  key: "curMonthState",
  default: kr_curr.getMonth() + 1,
});

export const curYearState = atom<number>({
  key: "curYearState",
  default: kr_curr.getFullYear(),
});
