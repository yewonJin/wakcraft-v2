"use client";

import { medium } from "@/app/layout";
import { useCalendar } from "@/hooks/useCalendar";

import { Schedule } from "@/domains/schedule";
import CalendarMonthButton from "./CalendarMonthButton";
import CalendarCurDate from "./CalendarCurDate";
import CalendarTools from "./CalendarTools";
import CalendarTableHead from "./CalendarTableHead";
import CalendarTableBody from "./CalendarTableBody";

export default function Calendar({ schedules }: { schedules: Schedule[] }) {
  const {
    ref,
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

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-40 md:block xl:px-0">
      <h2
        className={`text-3xl text-text-primary sm:text-4xl ${medium.className}`}
      >
        캘린더
      </h2>
      <div className="relative mt-12 flex items-center justify-between">
        <div className="relative flex items-center gap-4">
          <CalendarMonthButton
            type="prev"
            curMonth={curMonth}
            curYear={curYear}
            changeMonth={decMonth}
          />
          <CalendarMonthButton
            type="next"
            curMonth={curMonth}
            curYear={curYear}
            changeMonth={incMonth}
          />
          <CalendarCurDate curMonth={curMonth} curYear={curYear} />
        </div>
        <CalendarTools setToday={setToday} setDateToStart={setDateToStart} />
      </div>
      <CalendarTableHead />
      <CalendarTableBody
        ref={ref}
        curMonth={curMonth}
        getStartDate={getStartDate}
        getEndDate={getEndDate}
        curMonthContent={curMonthContent}
      />
    </div>
  );
}
