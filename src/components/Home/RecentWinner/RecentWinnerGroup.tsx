import {
  NoobProHacker,
  getHackerWinnerLine,
  getProWinnerLine,
} from "@/domains/noobprohacker";
import RecentWinnerItem from "./RecentWinnerItem";

type Props = {
  noobprohacker: NoobProHacker;
};

export default function RecentWinnerGroup(props: Props) {
  const { noobprohacker } = props;

  return (
    <div className="flex w-full flex-col gap-5 md:flex-row">
      <RecentWinnerItem
        type="hacker"
        noobprohacker={noobprohacker}
        getWinnerLine={getHackerWinnerLine}
      />
      <RecentWinnerItem
        type="pro"
        noobprohacker={noobprohacker}
        getWinnerLine={getProWinnerLine}
      />
    </div>
  );
}
