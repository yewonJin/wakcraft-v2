import { NoobProHacker } from "@/domains/noobprohacker";
import RecentWinnerGroup from "./RecentWinnerGroup";

type Props = {
  noobprohackers: NoobProHacker[];
};

export default function RecentWinnerSection(props: Props) {
  const { noobprohackers } = props;

  return (
    <div
      className={`relative mt-10 flex flex-wrap gap-5 gap-y-8 md:[&>div:nth-child(2)]:flex-row-reverse`}
    >
      {noobprohackers.map((noobprohacker) => (
        <RecentWinnerGroup
          key={noobprohacker.contentInfo.episode}
          noobprohacker={noobprohacker}
        />
      ))}
    </div>
  );
}
