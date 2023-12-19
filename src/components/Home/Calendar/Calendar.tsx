"use client";

import { useRef } from "react";

import { medium } from "@/app/layout";
import { useCalendar } from "@/hooks/useCalendar";
import ArrowBack from "../../../../public/icons/arrow_back.svg";
import InvisibleBlock from "./InvisibleBlock";
import Block from "./Block";
import ContentBlock from "./ContentBlock";
import { Schedule } from "@/domains/schedule";
import { kr_curr } from "@/store/calendar";

export default function Calendar({ schedules }: { schedules: Schedule[] }) {
  const {
    curMonth,
    curYear,
    setToday,
    incMonth,
    decMonth,
    setDateToStart,
    getStartDate,
    getEndDate,
    curMonthContent,
  } = useCalendar(schedules);

  const ref = useRef<HTMLDivElement>(null);

  const renderCalendar = () => {
    const arr = new Array(7 * 6).fill(0).map((_, index) => {
      if (index < getStartDate() || index >= getEndDate()) {
        return <InvisibleBlock key={index} />;
      }

      if (
        curMonth === kr_curr.getMonth() + 1 &&
        curYear === kr_curr.getFullYear() &&
        index === kr_curr.getDate() + getStartDate() - 1
      ) {
        return (
          <Block
            key={index}
            isToday={true}
            index={index}
            startDate={getStartDate()}
          />
        );
      } else {
        return (
          <Block
            key={index}
            isToday={false}
            index={index}
            startDate={getStartDate()}
          />
        );
      }
    });

    curMonthContent.forEach((item) => {
      if (
        curMonth === kr_curr.getMonth() + 1 &&
        curYear === kr_curr.getFullYear() &&
        parseInt(item.date.split("-")[2]) === kr_curr.getDate()
      ) {
        arr[parseInt(item.date.split("-")[2]) + getStartDate() - 1] = (
          <ContentBlock
            key={item.date}
            isToday={true}
            curMonth={curMonth}
            startDate={getStartDate()}
            index={parseInt(item.date.split("-")[2]) + getStartDate() - 1}
            item={item}
          />
        );

        return;
      }

      arr[parseInt(item.date.split("-")[2]) + getStartDate() - 1] = (
        <ContentBlock
          key={item.date}
          isToday={false}
          curMonth={curMonth}
          startDate={getStartDate()}
          index={parseInt(item.date.split("-")[2]) + getStartDate() - 1}
          item={item}
        />
      );
    });

    return arr;
  };

  return (
    <div className="mx-auto hidden max-w-[1200px] px-4 pt-40 md:block xl:px-0">
      <h2
        className={`text-3xl text-text-primary sm:text-4xl ${medium.className}`}
      >
        캘린더
      </h2>
      <div className="relative mt-12 flex items-center justify-between">
        <div className="relative flex items-center gap-4">
          <span
            className={`${
              curMonth === 8 && curYear === 2020 ? "invisible" : ""
            } select-none hover:cursor-pointer [&>svg]:h-[22px] [&>svg]:w-[22px] [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary`}
            onClick={decMonth}
          >
            <ArrowBack />
          </span>
          <span
            className="select-none hover:cursor-pointer [&>svg]:h-[22px] [&>svg]:w-[22px] [&>svg]:rotate-180 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary"
            onClick={incMonth}
          >
            <ArrowBack />
          </span>
          <div className="ml-2 flex items-end gap-2">
            <h3
              className={`${medium.className} text-center text-2xl text-text-primary `}
            >
              {curYear + "년"}
            </h3>
            <h2
              className={`${medium.className} text-center text-2xl text-text-primary `}
            >
              {curMonth + "월"}
            </h2>
          </div>
        </div>
        <div className="flex gap-2">
          <span
            className=" rounded-xl bg-background-secondary p-2 px-3 text-sm text-text-secondary hover:cursor-pointer hover:bg-background-tertiary"
            onClick={() => setToday()}
          >
            오늘
          </span>
          <span
            className=" rounded-xl bg-background-secondary p-2 px-3 text-sm text-text-secondary hover:cursor-pointer hover:bg-background-tertiary"
            onClick={() => setDateToStart()}
          >
            처음
          </span>
        </div>
      </div>
      <ul
        className={`mt-3 grid grid-cols-7 gap-1 py-3 text-center text-lg text-text-primary ${medium.className} border-2 border-background-secondary`}
      >
        <li className="text-[#b91c1c]">SUN</li>
        <li>MON</li>
        <li>TUE</li>
        <li>WED</li>
        <li>THU</li>
        <li>FRI</li>
        <li className="text-[#1d4ed8]">SAT</li>
      </ul>
      <div className="grid grid-cols-7 gap-1" ref={ref}>
        {renderCalendar()}
      </div>
    </div>
  );
}
