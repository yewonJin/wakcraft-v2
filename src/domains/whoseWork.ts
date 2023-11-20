export type WhoseWork = {
  difficulty: string;
  numberOfArchitecture: number;
  correctAnswerCountDistribution: number[];
};

export const getTopPercentage = (
  whoseWork: WhoseWork,
  correctCount: number,
) => {
  const sample_size = whoseWork.correctAnswerCountDistribution.reduce(
    (acc, cur) => acc + cur,
    0,
  );

  const my_rank = whoseWork.correctAnswerCountDistribution
    .slice(correctCount, whoseWork.correctAnswerCountDistribution.length - 1)
    .reduce((acc, cur) => acc + cur, 0);

  return ((my_rank / sample_size) * 100).toFixed(0);
};
