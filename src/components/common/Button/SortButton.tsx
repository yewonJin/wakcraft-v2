import { MouseEvent } from "react";

import ArrowDown from "../../../../public/icons/arrow_down.svg";

type Props = {
  handleButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isClicked: boolean;
  isDescending: boolean;
  value: string;
};

export default function SortButton(props: Props) {
  const { handleButtonClick, isClicked, isDescending, value, ...rest } = props;

  return (
    <button
      onClick={handleButtonClick}
      className="flex rounded-md bg-background-secondary p-2 px-3 text-text-secondary hover:cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary [&>svg]:duration-100"
      style={{
        backgroundColor: isClicked ? "#881337" : "",
        color: isClicked ? "white" : "",
      }}
      {...rest}
    >
      {value}
      <ArrowDown
        style={{
          fill: isClicked ? "white" : "",
          transform: isClicked && !isDescending ? "rotate(180deg)" : "",
        }}
      />
    </button>
  );
}
