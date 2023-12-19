import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";

import { Schedule } from "@/domains/schedule";
import { curMonthState, curYearState, kr_curr } from "@/store/calendar";

const BASE_YEAR = 2020;
const BASE_MONTH = 1;
const BASE_START_DATE = 3;
const DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const useCalendar = (schedules: Schedule[]) => {
  const [curMonth, setCurMonth] = useRecoilState(curMonthState);
  const [curYear, setCurYear] = useRecoilState(curYearState);
  const ref = useRef<HTMLDivElement>(null);

  // "오늘" 표시하기
  useEffect(() => {
    if (!ref.current) return;

    Array.from(ref.current.children).map((item) => {
      item.removeAttribute("style");
    });

    if (
      curMonth !== kr_curr.getMonth() + 1 ||
      curYear !== kr_curr.getFullYear()
    ) {
      return;
    }

    ref.current.children[kr_curr.getDate() + getStartDate() - 1].setAttribute(
      "style",
      "border: 1px solid",
    );
  }, [curMonth]);

  const curMonthContent =
    schedules
      .filter((item) => parseInt(item.date.split("-")[0]) === curYear)
      .filter((item) => parseInt(item.date.split("-")[1]) === curMonth) || [];

  const setDateToStart = () => {
    setCurYear(2020);
    setCurMonth(8);
  };

  const incMonth = () => {
    if (curMonth === 12) {
      incYear();
      setCurMonth(1);
      return;
    }

    setCurMonth((prev) => prev + 1);
  };

  const decMonth = () => {
    if (curMonth === 1) {
      decYear();
      setCurMonth(12);
      return;
    }

    setCurMonth((prev) => prev - 1);
  };

  const incYear = () => {
    setCurYear((prev) => prev + 1);
  };

  const decYear = () => {
    setCurYear((prev) => prev - 1);
  };

  const setToday = () => {
    setCurMonth(new Date().getMonth() + 1);
    setCurYear(new Date().getFullYear());
  };

  const getStartDate = () => {
    return (
      (BASE_START_DATE +
        getYearAcc(BASE_YEAR, curYear) +
        getMonthAcc(curYear, curMonth)) %
      7
    );
  };

  const getEndDate = () => {
    let result = getStartDate() + DAYS_PER_MONTH[curMonth - 1];

    if (curYear % 4 === 0 && curMonth === 2) {
      return result + 1;
    }

    return result;
  };

  return {
    ref,
    curMonth,
    curYear,
    setToday,
    incMonth,
    decMonth,
    setDateToStart,
    incYear,
    decYear,
    getStartDate,
    getEndDate,
    curMonthContent,
  };
};

const getYearAcc = (BASE_YEAR: number, curYear: number) => {
  let result = 0;

  for (let i = BASE_YEAR; i < curYear; i++) {
    if (i % 4 === 0) {
      result++;
    }

    result++;
  }

  return result;
};

const getMonthAcc = (curYear: number, curMonth: number) => {
  let result = DAYS_PER_MONTH.slice(0, curMonth - 1).reduce(
    (acc, cur) => acc + cur,
    0,
  );

  if (curYear % 4 === 0 && curMonth > 2) {
    result++;
  }

  return result;
};
