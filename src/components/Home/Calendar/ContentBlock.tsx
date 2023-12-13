import { Schedule } from "@/domains/schedule";
import Add from "../../../../public/icons/add.svg";

type Props = {
  curMonth: number;
  index: number;
  startDate: number;
  item: Schedule;
  isToday: boolean;
};

export default function ContentBlock(props: Props) {
  const { curMonth, index, startDate, item, isToday } = props;

  return (
    <div
      className={`relative h-[130px]  ${
        isToday ? "border-[1px] border-text-secondary" : ""
      } p-3 text-lg text-text-secondary duration-300 [&>li:marker]:mr-0`}
      key={curMonth + index}
      style={{ backgroundColor: getBackgroundColor(item.content) }}
    >
      <p>{index + 1 - startDate}</p>
      <span className="absolute bottom-2 right-2 rounded-full bg-background-primary p-1 hover:cursor-pointer [&>svg]:rotate-90 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-secondary">
        <Add />
      </span>
      <div
        key={curMonth + index}
        className="relative mt-1 flex flex-col gap-3 text-center"
      >
        <div className="flex flex-col gap-1">
          <p>{item.content}</p>
          <p className="mb-[1px] text-sm">{`[${item.episode}회]`}</p>
        </div>
      </div>
    </div>
  );
}

const getBackgroundColor = (content: string) => {
  switch (content) {
    case "눕프로해커":
      return "#4c0519";

    case "배치고사":
      return "#713f12";

    case "이벤트 눕프핵":
      return "#365314";

    case "조공 컨텐츠":
      return "#083344";
  }
};
