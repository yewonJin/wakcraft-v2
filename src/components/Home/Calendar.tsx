"use client";

import { medium } from "@/app/layout";
import ArrowBack from "../../../public/icons/arrow_back.svg";
import { useCalendar } from "@/hooks/useCalendar";

export default function Calendar() {
  const { curMonth, curYear, incMonth, decMonth, getStartDate, getEndDate } =
    useCalendar();

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
          className=" select-none hover:cursor-pointer [&>svg]:rotate-180 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary"
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
      <div className="grid grid-cols-7 gap-1">
        {new Array(7 * 6).fill(0).map((item, index) => {
          if (index < getStartDate() || index >= getEndDate()) {
            return (
              <div
                className="h-[130px] p-4 text-lg text-text-secondary"
                key={index}
              ></div>
            );
          }

          return (
            <div
              className={` h-[130px] bg-background-tertiary p-4 text-lg text-text-secondary [&>li:marker]:mr-0`}
              key={index}
              style={{
                backgroundColor:
                  index === 11 ? "#713f12" : index === 13 ? "#881337" : "",
              }}
            >
              <p className="">{index + 1 - getStartDate()}</p>
              {index === 11 && (
                <div className="text-center text-base text-text-primary">
                  <p>[시즌4]</p>
                  <p>배치고사</p>
                </div>
              )}
              {index === 13 && (
                <div className="text-center text-base text-text-primary">
                  <p>[42회]</p>
                  <p>눕프로해커</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/*
<div className="mt-2 grid grid-cols-4 gap-1 text-center text-text-primary">
  <div className="bg-[#881337] px-4 py-1">눕프로해커</div>
  <div className="bg-[#713f12] px-4 py-1">배치고사</div>
  <div className="bg-[#365314] px-4 py-1">이벤트 눕프핵</div>
  <div className="bg-[#164e63] px-4 py-1">조공 컨텐츠</div>
</div>
*/
