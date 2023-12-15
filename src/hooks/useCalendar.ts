import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { Schedule } from "@/domains/schedule";
import { curMonthState, curYearState } from "@/store/calendar";

const BASE_YEAR = 2020;
const BASE_MONTH = 1;
const BASE_START_DATE = 3;
const DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const useCalendar = (schedules: Schedule[]) => {
  const [curMonth, setCurMonth] = useRecoilState(curMonthState);
  const [curYear, setCurYear] = useRecoilState(curYearState);

  useEffect(() => {
    setCurMonth(new Date().getMonth() + 1);
    setCurYear(new Date().getFullYear());
  }, []);

  const curMonthContent =
    schedules
      .filter((item) => parseInt(item.date.split("-")[0]) === curYear)
      .filter((item) => parseInt(item.date.split("-")[1]) === curMonth) || [];

  const setDateToStart = () => {
    setCurYear(2020);
    setCurMonth(8);
  };

  const isToday = (index: number) =>
    curMonth === new Date().getMonth() + 1 &&
    curYear === new Date().getFullYear() &&
    new Date().getDate() === index - getStartDate() + 1;

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
    curMonth,
    curYear,
    isToday,
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
