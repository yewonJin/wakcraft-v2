import TierBox from "../common/TierBox";

type Props = {
  sortedArr: any[];
  curCategory: string;
};

export default function ArchitectList(props: Props) {
  const { sortedArr, curCategory } = props;

  return (
    <div className="mt-4 flex select-none flex-col gap-4">
      {sortedArr
        .filter((architect) => {
          if (curCategory === "") return true;

          return architect.tier === curCategory;
        })
        .map((architect) => (
          <div
            key={architect.minecraft_id}
            className="flex w-full items-center justify-between gap-8 rounded-lg bg-background-secondary px-4 py-4 hover:cursor-pointer hover:bg-background-tertiary"
          >
            <div className="flex items-center gap-8  [&>span:first-child]:hidden md:[&>span:first-child]:flex">
              <TierBox tier={architect.tier} />
              <div className="flex flex-col gap-3 md:gap-1">
                <p className="text-text-primary md:text-xl">
                  {architect.minecraft_id}
                </p>
                <p className="text-sm text-text-secondary md:text-base">
                  {architect.wakzoo_id}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm md:mr-8 md:flex md:flex-nowrap md:items-center md:gap-10 md:text-base">
              <div className="flex items-center gap-2 text-text-tertiary md:flex-col">
                <p>참여 횟수</p>
                <p className="text-base text-text-secondary md:text-lg">
                  {architect.participation}
                </p>
              </div>
              <div className="flex items-center gap-2 text-text-tertiary md:flex-col">
                <p>총 우승</p>
                <p className="text-base text-text-secondary md:text-lg">
                  {architect.win}
                </p>
              </div>
              <div className="flex items-center gap-2 text-text-tertiary md:flex-col">
                <p>해커 우승</p>
                <p className="text-base text-text-secondary md:text-lg">
                  {architect.hackerWin}
                </p>
              </div>
              <div className="flex items-center gap-2 text-text-tertiary md:flex-col">
                <p>프로 우승</p>
                <p className="text-base text-text-secondary md:text-lg">
                  {architect.proWin}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
