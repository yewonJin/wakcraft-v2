import { MouseEvent } from "react";

type Props = {
  handleButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isClicked?: boolean;
  value: string;
  width?: string;
  height?: string;
};

export default function Button(props: Props) {
  const { handleButtonClick, isClicked, value, width, height, ...rest } = props;

  return (
    <button
      onClick={handleButtonClick}
      className={`rounded-md text-center duration-300 ${
        isClicked
          ? "bg-text-secondary text-background-secondary"
          : "bg-background-secondary text-text-secondary  hover:bg-background-tertiary"
      }  p-2 px-4 hover:cursor-pointer`}
      {...rest}
      style={{ width: width, height: height }}
    >
      {value}
    </button>
  );
}
