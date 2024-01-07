import { ForwardedRef, forwardRef } from "react";

import { Schedule } from "@/domains/schedule";
import InvisibleBlock from "./CalendarBlock/InvisibleBlock";
import Block from "./CalendarBlock/Block";
import ContentBlock from "./CalendarBlock/ContentBlock";

type Props = {
  curMonth: number;
  getStartDate: () => number;
  getEndDate: () => number;
  curMonthContent: Schedule[];
};

function CalendarTableBody(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  const { curMonth, getStartDate, getEndDate, curMonthContent } = props;

  const renderCalendar = () => {
    const arr = new Array(7 * 6).fill(0).map((_, index) => {
      if (index < getStartDate() || index >= getEndDate()) {
        return <InvisibleBlock key={index} />;
      }

      return (
        <Block
          key={index}
          isToday={false}
          index={index}
          startDate={getStartDate()}
        />
      );
    });

    curMonthContent.forEach((item) => {
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
    <div className="grid grid-cols-7 gap-1" ref={ref}>
      {renderCalendar()}
    </div>
  );
}

CalendarTableBody.displayName = "CalendarTableBody";

export default forwardRef<HTMLDivElement, Props>(CalendarTableBody);
