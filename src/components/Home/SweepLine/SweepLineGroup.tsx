import { SweepLine } from "@/domains/noobprohacker";
import SweepLineItem from "./SweepLineItem";

type Props = {
  sweepLine: SweepLine;
};

export default function SweepLineGroup(props: Props) {
  const { sweepLine } = props;

  return (
    <div className="mt-8 flex w-full flex-col gap-8 md:flex-row">
      <SweepLineItem type="noob" sweepLine={sweepLine} />
      <SweepLineItem type="pro" sweepLine={sweepLine} />
      <SweepLineItem type="hacker" sweepLine={sweepLine} />
    </div>
  );
}
