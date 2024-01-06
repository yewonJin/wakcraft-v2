import { ChangeEvent, HTMLInputTypeAttribute } from "react";

import Input from "./Input";

type Props = {
  label: string;
  name: string;
  value: string | number;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
};

export default function InputField(props: Props) {
  const { label, ...rest } = props;

  return (
    <div className="flex flex-col gap-2 [&>input]:h-[40px] [&>input]:w-[48px]">
      <label className="text-lg text-text-secondary">{label}</label>
      <Input {...rest} />
    </div>
  );
}
