import Link from "next/link";
import { medium } from "../layout";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1200px] px-2 pb-8 pt-24 sm:px-4 xl:px-0 xl:pt-32">
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>게임</h1>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <Link href={"/game/world_cup"}>
          <div
            className={`rounded-xl bg-background-secondary p-6 ${medium.className} hover:bg-background-tertiary`}
          >
            <h2 className="text-2xl text-text-primary">눕프핵 해커 월드컵</h2>
            <p className="mt-4 text-text-secondary">
              해커 작품으로 이상형 월드컵을 진행하는 게임
            </p>
          </div>
        </Link>
        <Link href={"/game/whose_work"}>
          <div
            className={`rounded-xl bg-background-secondary p-6 ${medium.className} hover:bg-background-tertiary`}
          >
            <h2 className="text-2xl text-text-primary">건축가 맞추기</h2>
            <p className="mt-4 text-text-secondary">
              이미지에 해당하는 건축가를 맞추는 게임
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
