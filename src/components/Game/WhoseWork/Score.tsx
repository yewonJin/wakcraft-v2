import { WhoseWork } from "@/domains/whoseWork";

import Chart from "./Chart";

type Props = {
  correctCount: number;
  whoseWork: WhoseWork;
  resetGame: () => void;
};

export default function Score(props: Props) {
  const { correctCount, whoseWork, resetGame } = props;

  const sample_size = whoseWork.correctAnswerCountDistribution.reduce(
    (acc, cur) => acc + cur,
    0,
  );

  return (
    <div className="relative">
      <div className="relative flex h-[90px] justify-between">
        <div className="absolute left-[50%] flex translate-x-[-50%] flex-col items-center gap-4">
          <p className="text-lg text-text-primary">
            {"맞힌 문제 : " + correctCount + "개"}
          </p>
          <p className="text-2xl text-text-primary">
            {"상위 " +
              (
                (whoseWork.correctAnswerCountDistribution
                  .slice(
                    correctCount,
                    whoseWork.correctAnswerCountDistribution.length - 1,
                  )
                  .reduce((acc, cur) => acc + cur, 0) /
                  sample_size) *
                100
              ).toFixed(0)}
            %
          </p>
        </div>
      </div>
      <Chart whoseWork={whoseWork} />
      <div className="flex justify-center">
        <button
          className="mt-20 bg-background-secondary px-12 py-6 text-text-secondary"
          onClick={() => resetGame()}
        >
          다시하기
        </button>
      </div>
    </div>
  );
}
