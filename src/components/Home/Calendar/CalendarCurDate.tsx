import { medium } from "@/app/layout";

type Props = {
  curMonth: number;
  curYear: number;
};

export default function CalendarCurDate(props: Props) {
  const { curMonth, curYear } = props;

  return (
    <div className="ml-2 flex items-end gap-2">
      <p
        className={`${medium.className} text-center text-2xl text-text-primary `}
      >
        {curYear + "년"}
      </p>
      <p
        className={`${medium.className} text-center text-2xl text-text-primary `}
      >
        {curMonth + "월"}
      </p>
    </div>
  );
}
