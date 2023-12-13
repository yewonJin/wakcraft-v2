import { useState } from "react";

// TODO: 기준년도, 기준월 이하로 못내려가게

const BASE_YEAR = 2021;
const BASE_MONTH = 1;
const BASE_START_DATE = 5;
const DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const useCalendar = () => {
  const [curMonth, setCurMonth] = useState(new Date().getMonth() + 1);
  const [curYear, setCurYear] = useState(new Date().getFullYear());

  const arr = [];

  const curMonthContent = arr
    .filter((item) => parseInt(item.date.split("-")[0]) === curYear)
    .filter((item) => parseInt(item.date.split("-")[1]) === curMonth);

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
    incMonth,
    decMonth,
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
