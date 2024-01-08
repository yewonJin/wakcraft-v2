import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { medium } from "@/app/layout";
import { RoundOfNumber } from "@/hooks/Game/WorldCup/useSetting";
import Button from "@/components/common/Button/Button";
import SelectBox from "@/components/common/SelectBox/SelectBox";

type Props = {
  roundOfNumber: RoundOfNumber;
  setRoundOfNumber: Dispatch<SetStateAction<RoundOfNumber>>;
  startGame: () => void;
};

export default function GameSetting(props: Props) {
  const { roundOfNumber, setRoundOfNumber, startGame } = props;

  return (
    <div className="mx-auto  max-w-[1200px] px-4 pb-8 pt-24 xl:px-0 xl:pt-32">
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>
        눕프핵 해커 월드컵
      </h1>
      <div className="mt-6 flex items-end gap-4">
        <SelectBox
          width="80px"
          height="40px"
          value={roundOfNumber}
          options={[128, 64, 32, 16]}
          optionSuffix="강"
          handleSelectChange={(e) =>
            setRoundOfNumber(parseInt(e.target.value) as RoundOfNumber)
          }
        />

        <Button handleButtonClick={() => startGame()} value="시작" />
        <Link href={"/game/world_cup/ranking"}>
          <Button value="랭킹 보기" />
        </Link>
      </div>
      <ul className="mt-12 list-disc text-text-secondary">
        <h3 className="text-xl text-text-primary">읽어주세요</h3>
        <li className="ml-5 mt-4">최근 눕프핵 작품을 우선으로 합니다.</li>
        <li className="ml-5 mt-4">
          정확한 데이터를 위해 128강 외에는 투표 결과를 반영하지 않습니다.
        </li>
      </ul>
    </div>
  );
}
