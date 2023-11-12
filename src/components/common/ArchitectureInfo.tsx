import { medium } from "@/app/layout";

type Props = {
  contentName: string;
  subject: string;
  tier?: string;
  ranking?: number;
};

export default function ArchitectureInfo(props: Props) {
  const { contentName, subject, tier, ranking } = props;

  return (
    <div
      className={`mt-4 flex ${
        !tier && !ranking ? "justify-center" : "justify-between"
      }`}
    >
      {!tier && ranking && <span className="min-w-[85px]"></span>}
      {tier && (
        <span
          className={`flex min-w-[85px] items-center justify-center rounded-lg ${getBackgroundColor(
            tier,
          )} text-[white]`}
        >
          {tier}
        </span>
      )}
      <div className="flex flex-col items-center gap-1">
        <p className="font-medium text-text-tertiary">{contentName}</p>
        <p className={medium.className + " text-text-primary"}>{subject}</p>
      </div>
      {ranking !== undefined && (
        <div className="flex min-w-[85px] flex-col items-center gap-1">
          <p className="text-text-tertiary">순위</p>
          <p className={medium.className + " text-text-primary"}>
            {ranking + "위"}
          </p>
        </div>
      )}
    </div>
  );
}

const getBackgroundColor = (tier: string) => {
  switch (tier) {
    case "해커":
      return "bg-[#881337]";

    case "프로":
      return "bg-[#0c4a6e]";

    case "눕":
      return "bg-[#713f12]";

    default:
      return "bg-[#333]";
  }
};
