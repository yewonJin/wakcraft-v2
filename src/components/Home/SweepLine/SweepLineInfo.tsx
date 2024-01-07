import { SweepLine } from "@/domains/noobprohacker";

type Props = {
  sweepLines: SweepLine[];
  page: number;
};

export default function SweepLineInfo(props: Props) {
  const { sweepLines, page } = props;

  return (
    <div className="absolute flex items-center gap-1 text-lg text-text-secondary">
      <p className="">{`EP${sweepLines[page].episode} : `}</p>
      <span className="text-xl text-text-primary">
        {sweepLines[page].subject}
      </span>
    </div>
  );
}
