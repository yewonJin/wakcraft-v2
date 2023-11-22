import { medium } from "@/app/layout";
import ArchitectureList from "./ArchitectureList";

export default function Ranking() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-8 pt-24 xl:px-0 xl:pt-32">
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>랭킹</h1>
      <div className="mt-8 flex h-[70px] w-full items-center gap-10 rounded-md bg-background-secondary px-6 text-text-secondary">
        <p className="w-[30px] text-center">순위</p>
        <p className="w-[150px]">이미지</p>
        <p className="flex-[2]">주제</p>
        <p className="flex-[2]">우승 비율</p>
        <p className="flex-1">링크</p>
      </div>
      <ArchitectureList />
    </div>
  );
}
