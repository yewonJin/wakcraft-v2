import { Architect } from "@/domains/architect";

type Props = {
  noobProHackerInfo: Architect["noobProHackerInfo"];
};

export default function Statistics(props: Props) {
  const { noobProHackerInfo } = props;

  return (
    <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 md:mr-8 md:flex md:flex-nowrap md:items-center md:gap-10 md:text-base [&>div:nth-child(3)]:hidden sm:[&>div:nth-child(3)]:flex [&>div:nth-child(4)]:hidden sm:[&>div:nth-child(4)]:flex">
      <div className="flex items-center justify-between gap-2 text-text-tertiary md:flex-col">
        <p>참여 횟수</p>
        <p className="text-base text-text-secondary md:text-lg">
          {noobProHackerInfo.participation}
        </p>
      </div>
      <div className="flex items-center justify-between gap-2 text-text-tertiary md:flex-col">
        <p>총 우승</p>
        <p className="text-base text-text-secondary md:text-lg">
          {noobProHackerInfo.win}
        </p>
      </div>
      <div className="flex items-center gap-2 text-text-tertiary md:flex-col">
        <p>해커 우승</p>
        <p className="text-base text-text-secondary md:text-lg">
          {noobProHackerInfo.hackerWin}
        </p>
      </div>
      <div className="flex items-center gap-2 text-text-tertiary md:flex-col">
        <p>프로 우승</p>
        <p className="text-base text-text-secondary md:text-lg">
          {noobProHackerInfo.proWin}
        </p>
      </div>
    </div>
  );
}
