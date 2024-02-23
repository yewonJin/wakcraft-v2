import { medium } from "@/app/layout";
import { getTierImage } from "@/domains/architect";

type Props = {
  tier: string;
  type: "main" | "detail";
  width?: string;
  height?: string;
};

export default function TierBox(props: Props) {
  const { tier, type, width, height } = props;

  return (
    <span
      className={`
      flex ${
        type === "main"
          ? "h-[68px] w-[60px] text-sm md:h-[94px] md:w-[85px] md:text-lg"
          : "h-[94px] w-[85px] text-lg"
      }  items-center justify-center bg-cover ${
        medium.className
      } text-center text-[white] hover:cursor-pointer`}
      style={{
        textShadow: "1px 1px 1px black",
        width: width || "",
        height: height || "",
        backgroundImage: getTierImage(tier),
      }}
    >
      {tier}
    </span>
  );
}
