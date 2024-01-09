import { ChangeEvent } from "react";

import Input from "./Input";
import SearchIcon from "../../../../public/icons/search.svg";

type Props = {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Search(props: Props) {
  const { input, handleInputChange } = props;

  return (
    <div className="relative w-full lg:w-[200px]">
      <Input
        name="search"
        value={input}
        type="text"
        placeholder="검색하세요..."
        handleInputChange={handleInputChange}
      />
      <span className="absolute right-3 top-3 lg:top-2 [&>svg]:fill-text-secondary ">
        <SearchIcon />
      </span>
    </div>
  );
}
