import { Fragment } from "react";

import { NoobProHacker } from "@/domains/noobprohacker";
import MainDivider from "./MainDivider";

type Props = {
  line: NoobProHacker["lineInfo"][0];
  index: number;
  curCategory: number;
  handleCategoryClick: (index: number) => void;
};

export default function MainCategoryItem(props: Props) {
  const { line, curCategory, handleCategoryClick, index } = props;

  return (
    <Fragment key={line.subject}>
      <li
        onClick={() => handleCategoryClick(index)}
        className={`w-max rounded-md bg-background-secondary p-2 px-3 text-base hover:cursor-pointer md:w-auto md:rounded-none md:bg-[rgba(0,0,0,0)] md:p-0 md:text-lg md:hover:text-[white] ${
          curCategory === index
            ? "bg-text-secondary text-background-primary md:text-[white]"
            : "text-text-secondary md:text-[#999]"
        }`}
      >
        {line.subject}
      </li>
      <MainDivider />
    </Fragment>
  );
}
