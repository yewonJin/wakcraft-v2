import InfoDescriptionTier from "./InfoDescriptionTier";
import InfoNoobProHacker from "./InfoNoobProHacker";

type Props = {
  numberOfArchitectsByTier: {
    [key: string]: number;
  };
};

export default function Info(props: Props) {
  const { numberOfArchitectsByTier } = props;

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-32 xl:px-0">
      <InfoNoobProHacker />
      <InfoDescriptionTier
        numberOfArchitectsByTier={numberOfArchitectsByTier}
      />
    </div>
  );
}
