import { produce } from "immer";
import { Dispatch, SetStateAction } from "react";

import ArrowBack from "../../../../public/icons/arrow_back.svg";

type Props = {
  page: number[];
  index: number;
  setPage: Dispatch<SetStateAction<number[]>>;
  length: number;
};

export default function CarouselSlider(props: Props) {
  const { page, index, setPage, length } = props;

  return (
    <div className=" mx-auto mt-16 hidden h-20 max-w-[1200px] justify-center md:flex">
      <div className="relative flex h-[56px] items-center justify-center gap-4 rounded-[48px] bg-background-secondary px-10">
        <span
          className="absolute -left-20 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background-secondary hover:cursor-pointer hover:bg-background-tertiary [&>svg]:fill-text-secondary"
          style={{ display: page[index] === 0 ? "none" : "" }}
          onClick={() => {
            setPage(
              produce((draft) => {
                draft[index]--;
              }),
            );
          }}
        >
          <ArrowBack />
        </span>
        {new Array(length).fill(0).map((_, i) => (
          <span
            key={"hi" + i}
            className={`h-3 ${
              page[index] === i ? "w-12" : "w-3"
            } rounded-full bg-text-tertiary duration-500 hover:cursor-pointer`}
            onClick={() => {
              setPage(
                produce((draft) => {
                  draft[index] = i;
                }),
              );
            }}
          />
        ))}
        <span
          className="absolute -right-20 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background-secondary hover:cursor-pointer hover:bg-background-tertiary [&>svg]:rotate-180 [&>svg]:fill-text-secondary"
          style={{ display: page[index] === length - 1 ? "none" : "" }}
          onClick={() => {
            setPage(
              produce((draft) => {
                draft[index]++;
              }),
            );
          }}
        >
          <ArrowBack />
        </span>
      </div>
    </div>
  );
}
