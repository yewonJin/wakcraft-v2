import { medium } from "@/app/layout";
import { RoundOfNumber } from "@/hooks/Game/WorldCup/useSetting";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

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
      <select
        value={roundOfNumber}
        onChange={(e) =>
          setRoundOfNumber(parseInt(e.target.value) as RoundOfNumber)
        }
        className="mt-8 rounded-md border-none px-2 py-1 outline-none"
      >
        <option key={128} value={128}>
          128강
        </option>
        <option key={64} value={64}>
          64강
        </option>
        <option key={32} value={32}>
          32강
        </option>
        <option key={16} value={16}>
          16강
        </option>
      </select>
      <button
        className=" ml-5 rounded-md bg-background-secondary px-3 py-2 text-text-primary hover:bg-background-tertiary"
        onClick={() => startGame()}
      >
        시작
      </button>
      <Link href={"/game/world_cup/ranking"}>
        <button className="ml-5 rounded-md bg-background-secondary px-3 py-2 text-text-primary hover:bg-background-tertiary">
          랭킹보기
        </button>
      </Link>
      <ul className="mt-12 list-disc text-text-secondary">
        <h3 className="text-xl text-text-primary">유의사항</h3>
        <li className="ml-5 mt-4">최근 눕프핵 작품을 우선적으로 진행합니다.</li>
        <li className="ml-5 mt-4">
          정확한 데이터를 위해 128강 외에는 투표 결과를 반영하지 않습니다.
        </li>
      </ul>
    </div>
  );
}
