import SearchIcon from "../../../public/icons/search.svg";

export default function Search() {
  return (
    <div className="relative w-full lg:w-[250px]">
      <input
        type="text"
        placeholder="검색하세요..."
        className="h-[48px] w-full rounded-lg border-2 border-background-secondary bg-background-primary pl-3 text-text-secondary outline-none lg:h-full"
      ></input>
      <span className="absolute right-3 top-3 lg:top-2 [&>svg]:fill-text-secondary ">
        <SearchIcon />
      </span>
    </div>
  );
}
