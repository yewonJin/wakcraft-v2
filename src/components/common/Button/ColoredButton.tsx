import { MouseEvent } from "react";

type Props = {
  handleButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isClicked: boolean;
  value: string;
  hoverBackgroundColor: string;
  clickedBackgroundColor: string;
};

export default function ColoredButton(props: Props) {
  const {
    handleButtonClick,
    isClicked,
    hoverBackgroundColor,
    clickedBackgroundColor,
    value,
    ...rest
  } = props;

  return (
    <button
      onClick={handleButtonClick}
      className={`w-max rounded-md bg-background-primary duration-300 hover:text-[white] ${
        hoverBackgroundColor ? hoverBackgroundColor : ""
      }  p-2 px-3 hover:cursor-pointer`}
      style={{
        color: isClicked ? "white" : "",
        backgroundColor: isClicked ? clickedBackgroundColor : "",
      }}
      {...rest}
    >
      {value}
    </button>
  );
}
