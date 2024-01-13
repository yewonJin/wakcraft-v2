import Button from "@/components/common/Button/Button";

type Props = {
  setToday: () => void;
  setDateToStart: () => void;
};

export default function CalendarTools(props: Props) {
  const { setToday, setDateToStart } = props;

  return (
    <div className="flex gap-2 [&>button]:text-sm">
      <Button
        value="오늘"
        handleButtonClick={setToday}
        padding="8px 12px"
        height="36px"
      />
      <Button
        value="처음"
        handleButtonClick={setDateToStart}
        padding="8px 12px"
        height="36px"
      />
    </div>
  );
}
