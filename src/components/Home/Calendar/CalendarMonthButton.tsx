import ArrowBack from "../../../../public/icons/arrow_back.svg";

type Props = {
  type: "prev" | "next";
  curMonth: number;
  curYear: number;
  changeMonth: () => void;
};

export default function CalendarMonthButton(props: Props) {
  const { type, curMonth, curYear, changeMonth } = props;

  return (
    <span
      className={`${
        type === "prev" && curMonth === 8 && curYear === 2020 ? "invisible" : ""
      } ${
        type === "next" ? "[&>svg]:rotate-180" : ""
      } select-none hover:cursor-pointer [&>svg]:h-[22px] [&>svg]:w-[22px] [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary`}
      onClick={changeMonth}
    >
      <ArrowBack />
    </span>
  );
}
