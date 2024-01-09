import { medium } from "@/app/layout";
import { tierArray } from "@/domains/architect";

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
      ${getTierImage(tier)} flex ${
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
      }}
    >
      {tier}
    </span>
  );
}

const getTierImage = (tier: string) => {
  if (tierArray.slice(0, 2).includes(tier)) return "bg-hacker2";
  else if (tierArray.slice(2, 4).includes(tier)) return "bg-hacker";
  else if (tierArray.slice(4, 5).includes(tier)) return "bg-gukbap2";
  else if (tierArray.slice(5, 7).includes(tier)) return "bg-gukbap";
  else if (tierArray.slice(7, 9).includes(tier)) return "bg-pro";
  else if (tierArray.slice(9, 11).includes(tier)) return "bg-gyeruik";
  else if (tierArray.slice(11, 12).includes(tier)) return "bg-noob2";
  else return "bg-noob";
};
