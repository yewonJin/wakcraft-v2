import React, {
  forwardRef,
  ChangeEvent,
  HTMLInputTypeAttribute,
  ForwardedRef,
} from "react";

type Props = {
  name: string;
  value: string | number;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  [key: string]: any;
};

function InputWithRef(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  const {
    name,
    value,
    placeholder,
    type,
    handleInputChange,
    width,
    height,
    ...rest
  } = props;

  return (
    <input
      name={name}
      type={type}
      ref={ref}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
      {...rest}
      className={`h-[40px] w-full rounded-md border-2 border-background-tertiary bg-background-primary pl-3 text-text-secondary outline-none`}
      style={{ width: width || "", height: height || "" }}
    />
  );
}

InputWithRef.displayName = "InputWithRef";

export default forwardRef<HTMLInputElement, Props>(InputWithRef);
