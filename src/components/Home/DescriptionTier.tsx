import {
  Tier,
  convertLineTierToTier,
  descriptionTier,
} from "@/domains/architect";
import TierBox from "../common/TierBox";
import { medium } from "@/app/layout";

export default function DescriptionTier() {
  return (
    <div className="mt-24">
      <div className="mt-24 flex flex-wrap gap-16 gap-y-20">
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-2xl text-text-primary ${medium.className}`}
          >
            해커
            <span className="rounded-md bg-background-secondary p-1 px-2 text-lg">
              14명
            </span>
          </div>
          {convertLineTierToTier("hacker").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105 "
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-[300px] animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-2xl text-text-primary ${medium.className}`}
          >
            국밥
            <span className="rounded-md bg-background-secondary p-1 px-2 text-lg">
              18명
            </span>
          </div>
          {convertLineTierToTier("gukbap").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105 "
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-[300px] animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-2xl text-text-primary ${medium.className}`}
          >
            프로
            <span className="rounded-md bg-background-secondary p-1 px-2 text-lg">
              11명
            </span>
          </div>
          {convertLineTierToTier("pro").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105 "
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-max animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-2xl text-text-primary ${medium.className}`}
          >
            계륵
            <span className="rounded-md bg-background-secondary p-1 px-2 text-lg">
              13명
            </span>
          </div>
          {convertLineTierToTier("gyeruik").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105 "
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-[300px] animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-2xl text-text-primary ${medium.className}`}
          >
            눕
            <span className="rounded-md bg-background-secondary p-1 px-2 text-lg">
              14명
            </span>
          </div>
          {convertLineTierToTier("noob").map((tier) => (
            <div
              key={tier}
              className="group relative [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105 "
            >
              <TierBox tier={tier} />
              <div className="-bottom-18 absolute z-10 hidden w-max  animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 group-hover:block">
                {descriptionTier[tier as Tier]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center gap-8 rounded-xl border-2 border-background-secondary p-4 px-6">
          <div
            className={`absolute -top-12 left-0 flex w-full items-center gap-3 text-2xl text-text-primary ${medium.className}`}
          >
            언랭
            <span className="rounded-md bg-background-secondary p-1 px-2 text-lg">
              185명
            </span>
          </div>
          <div className="group relative [&>span]:select-none [&>span]:duration-100 [&>span]:hover:scale-105 ">
            <TierBox tier="언랭" />
            <div className="-bottom-18 absolute z-10 hidden w-max  animate-fadeIn rounded-lg bg-background-secondary px-4 py-3 text-text-secondary duration-300 group-hover:block">
              {descriptionTier["언랭"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
