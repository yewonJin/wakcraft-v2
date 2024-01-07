type Props = {
  index: number;
  startDate: number;
  isToday: boolean;
};

export default function Block(props: Props) {
  const { index, startDate, isToday } = props;

  return (
    <div
      className={`h-[70px] border-text-secondary bg-background-secondary p-2 text-lg text-text-secondary md:h-[110px] xl:h-[130px] xl:p-3`}
      style={{ border: isToday ? "1px solid" : "" }}
    >
      <p className="text-center text-base md:text-start xl:text-lg">
        {index + 1 - startDate}
      </p>
    </div>
  );
}
