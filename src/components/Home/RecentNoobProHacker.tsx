import { medium } from "@/app/layout";
import { NoobProHacker } from "@/domains/noobprohacker";
import Title from "./Title";
import Line from "./Line";

type Props = {
  noobprohacker: NoobProHacker;
};

export default function RecentNoobProHacker(props: Props) {
  const { noobprohacker } = props;

  return (
    <div
      className={
        medium.className +
        " z-10 mx-auto flex h-[100vh] w-full max-w-[1200px] flex-col justify-center px-4 font-medium xl:px-0"
      }
    >
      <Title
        episode={noobprohacker.contentInfo.episode}
        subject={noobprohacker.contentInfo.main_subject}
      />
      <Line lines={noobprohacker.lineInfo} />
    </div>
  );
}
