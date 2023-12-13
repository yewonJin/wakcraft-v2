"use client";

import { useRef } from "react";

import { medium } from "@/app/layout";
import { useCalendar } from "@/hooks/useCalendar";
import ArrowBack from "../../../../public/icons/arrow_back.svg";
import InvisibleBlock from "./InvisibleBlock";
import Block from "./Block";
import ContentBlock from "./ContentBlock";

export default function Calendar() {
  const {
    curMonth,
    curYear,
    isToday,
    incMonth,
    decMonth,
    getStartDate,
    getEndDate,
    curMonthContent,
  } = useCalendar();

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto max-w-[1200px] pt-40">
      <h2
        className={`text-3xl text-text-primary sm:text-4xl ${medium.className}`}
      >
        캘린더
      </h2>
      <div className="flex items-center justify-center gap-6">
        <span
          className="select-none hover:cursor-pointer [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary"
          onClick={decMonth}
        >
          <ArrowBack />
        </span>
        <div className="flex items-end gap-3">
          <h2
            className={`${medium.className} text-center text-2xl text-text-primary `}
          >
            {curMonth + "월"}
          </h2>
          <h3
            className={`${medium.className} text-center text-xl text-text-tertiary `}
          >
            {curYear}
          </h3>
        </div>
        <span
          className="select-none hover:cursor-pointer [&>svg]:rotate-180 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary"
          onClick={incMonth}
        >
          <ArrowBack />
        </span>
      </div>
      <ul
        className={`mt-6 grid grid-cols-7 gap-1 py-2 text-center text-lg text-text-primary ${medium.className} border-2 border-background-secondary`}
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
        {new Array(7 * 6).fill(0).map((_, index) => {
          if (index < getStartDate() || index >= getEndDate()) {
            return <InvisibleBlock key={curMonth + index} />;
          }

          if (!curMonthContent.length) {
            return (
              <Block
                key={curMonth + index}
                isToday={isToday(index)}
                index={index}
                startDate={getStartDate()}
              />
            );
          }

          return curMonthContent.map((item) => {
            if (
              parseInt(item.date.split("-")[2]) + getStartDate() - 1 ===
              index
            ) {
              return (
                <ContentBlock
                  key={curMonth + index}
                  isToday={isToday(index)}
                  curMonth={curMonth}
                  startDate={getStartDate()}
                  index={index}
                  item={item}
                />
              );
            }

            return (
              <Block
                key={curMonth + index}
                isToday={isToday(index)}
                index={index}
                startDate={getStartDate()}
              />
            );
          });
        })}
      </div>
    </div>
  );
}
