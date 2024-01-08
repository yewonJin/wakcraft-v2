import { useRecoilValue } from "recoil";

import { WhoseWork, getTopPercentage } from "@/domains/whoseWork";
import { correctCountState } from "@/store/whoseWork";
import Chart from "./Chart";
import Button from "@/components/common/Button/Button";

type Props = {
  whoseWork: WhoseWork;
  restartGame: () => void;
};

export default function Score(props: Props) {
  const { whoseWork, restartGame } = props;

  const correctCount = useRecoilValue(correctCountState);

  return (
    <div className="relative">
      <div className="relative flex h-[90px] justify-between">
        <div className="absolute left-[50%] flex translate-x-[-50%] flex-col items-center gap-4">
          <p className="text-lg text-text-primary">
            {"맞힌 문제 : " + correctCount + "개"}
          </p>
          <p className="text-2xl text-text-primary">
            {"상위 " + getTopPercentage(whoseWork, correctCount) + "%"}
          </p>
        </div>
      </div>
      <Chart whoseWork={whoseWork} />
      <div className="mt-14 flex justify-center">
        <Button handleButtonClick={restartGame} value="다시하기" />
      </div>
    </div>
  );
}
