import { useRecoilValue } from "recoil";

import { WhoseWork, getTopPercentage } from "@/domains/whoseWork";
import { correctCountState } from "@/store/whoseWork";
import Chart from "./Chart";

type Props = {
  whoseWork: WhoseWork;
};

export default function Score(props: Props) {
  const { whoseWork } = props;

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
      <div className="flex justify-center">
        <button
          className="mt-8 bg-background-secondary px-4 py-2 text-text-secondary md:mt-12"
          onClick={() => location.reload()}
        >
          다시하기
        </button>
      </div>
    </div>
  );
}
