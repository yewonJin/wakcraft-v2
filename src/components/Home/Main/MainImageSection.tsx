import { NoobProHacker } from "@/domains/noobprohacker";
import MainImageItem from "./MainImageItem";

type Props = {
  curCategory: number;
  lines: NoobProHacker["lineInfo"];
  initInterval: () => void;
  startInterval: () => void;
};

export default function MainImageSection(props: Props) {
  const { curCategory, lines, initInterval, startInterval } = props;

  return (
    <div className="overflow-hidden">
      <div
        className={`mt-4 flex gap-8 duration-500 md:mt-10 `}
        style={{
          transform: `translateX(calc(${-curCategory} * (100% + 32px)))`,
        }}
      >
        {lines.map((line) => {
          return (
            <MainImageItem
              key={line.subject}
              line={line}
              initInterval={initInterval}
              startInterval={startInterval}
            />
          );
        })}
      </div>
    </div>
  );
}
