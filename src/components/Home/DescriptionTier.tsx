import {
  Tier,
  convertLineTierToTier,
  descriptionTier,
} from "@/domains/architect";
import TierBox from "../common/TierBox";
import { medium } from "@/app/layout";

type Props = {
  numberOfArchitectsByTier: {
    [key: string]: number;
  };
};

export default function DescriptionTier(props: Props) {
  const { numberOfArchitectsByTier } = props;

  return (
    <div className="mt-24">
      <div className="mt-24 flex flex-wrap gap-16 gap-y-20">
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-xl text-text-primary md:text-2xl ${medium.className}`}
          >
            해커
            <span className="rounded-md bg-background-secondary p-1 px-2 text-base md:text-lg">
              {numberOfArchitectsByTier.hacker}명
            </span>
          </div>
          {convertLineTierToTier("hacker").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:h-[78px] [&>span]:w-[70px] [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105"
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-[300px] animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 md:group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-xl text-text-primary md:text-2xl ${medium.className}`}
          >
            국밥
            <span className="rounded-md bg-background-secondary p-1 px-2 text-base md:text-lg">
              {numberOfArchitectsByTier.gukbap}명
            </span>
          </div>
          {convertLineTierToTier("gukbap").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:h-[78px] [&>span]:w-[70px] [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105"
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-[300px] animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 md:group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-xl text-text-primary md:text-2xl ${medium.className}`}
          >
            프로
            <span className="rounded-md bg-background-secondary p-1 px-2 text-base md:text-lg">
              {numberOfArchitectsByTier.pro}명
            </span>
          </div>
          {convertLineTierToTier("pro").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:h-[78px] [&>span]:w-[70px] [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105"
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-[300px] animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 md:group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-xl text-text-primary md:text-2xl ${medium.className}`}
          >
            계륵
            <span className="rounded-md bg-background-secondary p-1 px-2 text-base md:text-lg">
              {numberOfArchitectsByTier.gyeruik}명
            </span>
          </div>
          {convertLineTierToTier("gyeruik").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:h-[78px] [&>span]:w-[70px] [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105"
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-[300px] animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 md:group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-xl text-text-primary md:text-2xl ${medium.className}`}
          >
            눕
            <span className="rounded-md bg-background-secondary p-1 px-2 text-base md:text-lg">
              {numberOfArchitectsByTier.noob}명
            </span>
          </div>
          {convertLineTierToTier("noob").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:h-[78px] [&>span]:w-[70px] [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105"
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-[300px] animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 md:group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-xl text-text-primary md:text-2xl ${medium.className}`}
          >
            언랭
            <span className="rounded-md bg-background-secondary p-1 px-2 text-base md:text-lg">
              {numberOfArchitectsByTier.unranked}명
            </span>
          </div>
          <div className="group relative [&>span]:h-[78px] [&>span]:w-[70px] [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105 ">
            <TierBox tier="언랭" />
            <div className="-bottom-18 absolute z-10 hidden w-max  animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 md:group-hover:block">
              {descriptionTier["언랭"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
