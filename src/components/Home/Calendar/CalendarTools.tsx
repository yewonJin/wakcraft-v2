type Props = {
  setToday: () => void;
  setDateToStart: () => void;
};

export default function CalendarTools(props: Props) {
  const { setToday, setDateToStart } = props;

  return (
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
  );
}
