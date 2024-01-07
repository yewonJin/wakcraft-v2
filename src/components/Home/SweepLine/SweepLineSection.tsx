import { SweepLine } from "@/domains/noobprohacker";
import SweepLineGroup from "./SweepLineGroup";

type Props = {
  sweepLines: SweepLine[];
  page: number;
};

export default function SweepLineSection(props: Props) {
  const { sweepLines, page } = props;

  return (
    <div className="overflow-hidden pb-5">
      <div
        className="mt-1 flex gap-8 duration-300"
        style={{ transform: `translateX(calc(${-page} * (100% + 32px)))` }}
      >
        {sweepLines.map((sweepLine) => (
          <SweepLineGroup key={sweepLine.subject} sweepLine={sweepLine} />
        ))}
      </div>
    </div>
  );
}
