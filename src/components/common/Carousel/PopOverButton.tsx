import { Dispatch, SetStateAction } from "react";
import { produce } from "immer";

import ArrowDown from "../../../../public/icons/arrow_down.svg";

type Props = {
  isOpenPopOver: boolean[][];
  setIsOpenPopOver: Dispatch<SetStateAction<boolean[][]>>;
  detailIndex: number;
  index: number;
};

export default function PopOverButton(props: Props) {
  const { detailIndex, index, setIsOpenPopOver, isOpenPopOver } = props;

  return (
    <span
      className="ml-2 rounded-md bg-[rgba(64,64,64,0.4)] duration-300 hover:cursor-pointer lg:ml-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[white] hover:[&>svg]:fill-[#ddd] xl:[&>svg]:h-7 xl:[&>svg]:w-7"
      onClick={(e) => {
        e.stopPropagation();
        setIsOpenPopOver(
          produce((draft) => {
            draft[index][detailIndex] = !draft[index][detailIndex];
          }),
        );
      }}
      style={{
        transform: `rotate(${
          isOpenPopOver[index][detailIndex] ? "180deg" : "0deg"
        })`,
      }}
    >
      <ArrowDown />
    </span>
  );
}
