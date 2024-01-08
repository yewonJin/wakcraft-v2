import { ChangeEvent } from "react";

type Props = {
  value: string | number;
  name?: string;
  options: string[] | number[];
  optionSuffix?: string;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  width?: string;
  height?: string;
};

export default function SelectBox(props: Props) {
  const { value, options, optionSuffix, handleSelectChange, width, height } =
    props;

  return (
    <select
      value={value}
      onChange={handleSelectChange}
      name="status"
      className="rounded-md border-2 border-background-tertiary bg-background-primary pl-2 text-text-secondary outline-none"
      style={{ width: width, height: height }}
    >
      {options.map((option) => (
        <option
          className="bg-background-primary hover:cursor-pointer"
          value={option}
          key={option}
        >
          {`${option}${optionSuffix ? optionSuffix : ""}`}
        </option>
      ))}
    </select>
  );
}
