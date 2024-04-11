import { medium } from "@/app/layout";
import { NoobProHacker } from "@/domains/noobprohacker";
import MainTitle from "./MainTitle";
import MainInfo from "./MainInfo";

type Props = {
  noobprohacker: NoobProHacker;
};

export default function Main(props: Props) {
  const { noobprohacker } = props;

  return (
    <div
      className={
        medium.className +
        " z-10 mx-auto flex h-auto w-full max-w-[1200px] flex-col justify-center px-4 pt-24 md:h-[100vh] md:pt-0 xl:px-0"
      }
    >
      <MainTitle
        episode={noobprohacker.contentInfo.episode}
        subject={noobprohacker.contentInfo.main_subject}
      />
      <MainInfo lines={noobprohacker.lineInfo} />
    </div>
  );
}
