"use client";

import { Tier, backgroundColorVariants } from "@/domains/architect";
import ColoredButton from "../../common/Button/ColoredButton";

type Props = {
  curCategory: string;
  handleCategoryClick: (tier: string) => void;
};

export default function FilteringByTier(props: Props) {
  const { curCategory, handleCategoryClick } = props;

  return (
    <div className="relative select-none">
      <div
        className={
          "mt-4 flex w-full overflow-hidden overflow-x-scroll rounded-lg bg-background-secondary md:overflow-x-auto " +
          "category-scrollbar"
        }
      >
        <div className="flex items-center gap-3 px-2 py-3 text-sm text-text-primary md:flex-wrap md:gap-4 md:overflow-x-hidden md:text-base">
          {Object.keys(backgroundColorVariants).map((tier) => (
            <ColoredButton
              key={tier}
              data-value={tier}
              handleButtonClick={() => handleCategoryClick(tier)}
              value={tier}
              isClicked={curCategory === tier}
              hoverBackgroundColor={backgroundColorVariants[tier as Tier]}
              clickedBackgroundColor={getHexColor(
                backgroundColorVariants[tier as Tier],
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const getHexColor = (value: string) => {
  return value.split("-")[1].replace("[", "").replace("]", "");
};
