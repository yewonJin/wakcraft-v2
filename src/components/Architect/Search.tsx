import { ChangeEvent } from "react";

import SearchIcon from "../../../public/icons/search.svg";

type Props = {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Search(props: Props) {
  const { input, handleInputChange } = props;

  return (
    <div className="relative w-full lg:w-[250px]">
      <input
        value={input}
        type="text"
        placeholder="검색하세요..."
        onChange={handleInputChange}
        className="h-[48px] w-full rounded-lg border-2 border-background-secondary bg-background-primary pl-3 text-text-secondary outline-none lg:h-full"
      ></input>
      <span className="absolute right-3 top-3 lg:top-2 [&>svg]:fill-text-secondary ">
        <SearchIcon />
      </span>
    </div>
  );
}
