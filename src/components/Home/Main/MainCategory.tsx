import { Fragment } from "react";

import { NoobProHacker } from "@/domains/noobprohacker";
import MainDivider from "./MainDivider";
import MainCategoryItem from "./MainCategoryItem";

type Props = {
  lines: NoobProHacker["lineInfo"];
  curCategory: number;
  handleCategoryClick: (index: number) => void;
};

export default function MainCategory(props: Props) {
  const { lines, curCategory, handleCategoryClick } = props;

  return (
    <div
      className={
        "mt-8 overflow-y-hidden overflow-x-scroll pb-4 md:overflow-auto " +
        "category-scrollbar"
      }
    >
      <ul className="flex w-max flex-wrap gap-4 md:gap-8">
        <MainDivider />
        {lines.map((line, index) => (
          <Fragment key={line.subject}>
            <MainCategoryItem
              line={line}
              curCategory={curCategory}
              handleCategoryClick={handleCategoryClick}
              index={index}
            />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
