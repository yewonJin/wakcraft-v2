import { ChangeEvent } from "react";

type Props = {
  value: string;
  name?: string;
  options: string[];
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  width?: string;
  height?: string;
};

export default function Select(props: Props) {
  const { value, options, handleSelectChange, width, height } = props;

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
          {option}
        </option>
      ))}
    </select>
  );
}
