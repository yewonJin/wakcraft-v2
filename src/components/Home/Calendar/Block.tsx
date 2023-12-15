type Props = {
  index: number;
  startDate: number;
  isToday: boolean;
};

export default function Block(props: Props) {
  const { index, startDate, isToday } = props;

  return (
    <div
      className={`h-[130px] border-text-secondary bg-background-secondary p-3 text-lg text-text-secondary`}
      style={{ border: isToday ? "1px solid" : "" }}
    >
      <p>{index + 1 - startDate}</p>
    </div>
  );
}
