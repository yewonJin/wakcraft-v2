import Link from "next/link";
import TierBox from "../common/TierBox";
import Statistics from "./Statistics";

type Props = {
  architects: ExtendedArchitect[];
};

export default function ArchitectList(props: Props) {
  const { architects } = props;

  return (
    <div className="mt-4 flex select-none flex-col gap-4">
      {architects.map((architect) => {
        return (
          <Link
            key={architect.minecraft_id}
            href={`/architect/${architect.minecraft_id}`}
          >
            <div className="flex w-full items-center justify-between gap-8 rounded-lg bg-background-secondary px-4 py-4 hover:cursor-pointer hover:bg-background-tertiary">
              <div className="flex items-center gap-8  [&>span:first-child]:hidden sm:[&>span:first-child]:flex">
                <TierBox tier={architect.tier} />
                <div className="flex flex-col gap-3 md:gap-1">
                  <p className="text-text-primary md:text-xl">
                    {architect.minecraft_id
                      .split("")
                      .map((char: string, index: number) => {
                        if (architect.minecraftIdIndexArr.includes(index)) {
                          return (
                            <span key={char + index} className="text-[#d97706]">
                              {char}
                            </span>
                          );
                        }

                        return <span key={char + index}>{char}</span>;
                      })}
                  </p>
                  <p className="text-sm text-text-secondary md:text-base">
                    {architect.wakzoo_id
                      .split("")
                      .map((char: string, index: number) => {
                        if (architect.wakzooIdIndexArr.includes(index)) {
                          return (
                            <span key={char + index} className="text-[#d97706]">
                              {char}
                            </span>
                          );
                        }

                        return <span key={char + index}>{char}</span>;
                      })}
                  </p>
                </div>
              </div>
              <Statistics
                participation={architect.participation}
                win={architect.win}
                hackerWin={architect.hackerWin}
                proWin={architect.proWin}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// Temp Type
type Architect = {
  minecraft_id: string;
  tier: string;
  wakzoo_id: string;
  participation: number;
  win: number;
  hackerWin: number;
  proWin: number;
};

export interface ExtendedArchitect extends Architect {
  minecraftIdIndexArr: number[];
  wakzooIdIndexArr: number[];
}
