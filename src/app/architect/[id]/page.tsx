"use client";

import Portfolio from "@/components/Architect/DetailPage/Portfolio";
import Category from "@/components/Architect/DetailPage/Category";
import Statistics from "@/components/Architect/Statistics";
import TierBox from "@/components/common/TierBox";
import { tempArchitectObject } from "@/temp";
import usePortfolioCategory from "@/hooks/usePortfolioCategory";

export default function Page() {
  const { curCategory, handleCategoryClick } = usePortfolioCategory();

  return (
    <div>
      <div
        key={tempArchitectObject.minecraft_id}
        className="flex w-full flex-wrap items-center justify-between gap-8 rounded-lg xl:flex-nowrap"
      >
        <div className="flex items-center gap-8 md:[&>span:first-child]:flex">
          <TierBox tier={tempArchitectObject.curTier} />
          <div className="flex flex-col gap-3 md:gap-1">
            <p className="text-xl text-text-primary">
              {tempArchitectObject.minecraft_id}
            </p>
            <p className="text-text-secondary">
              {tempArchitectObject.wakzoo_id}
            </p>
          </div>
        </div>
        <Statistics
          participation={tempArchitectObject.noobProHackerInfo.participation}
          win={tempArchitectObject.noobProHackerInfo.win}
          hackerWin={tempArchitectObject.noobProHackerInfo.hackerWin}
          proWin={tempArchitectObject.noobProHackerInfo.proWin}
        />
      </div>
      <Category
        curCategory={curCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <Portfolio curCategory={curCategory} architect={tempArchitectObject} />
    </div>
  );
}
