type Props = {
  correctCount: number;
};

export default function Score(props: Props) {
  const { correctCount } = props;

  return (
    <div>
      <p className="text-lg text-text-primary">
        {"정답 개수 : " + correctCount}
      </p>
    </div>
  );
}
