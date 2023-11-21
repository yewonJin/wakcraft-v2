import Image from "next/image";
import { useRecoilValue } from "recoil";

import { winnerState } from "@/store/worldCup";
import { medium } from "@/app/layout";
import Link from "next/link";
import { renameTo1080Webp } from "@/domains/noobprohacker";

export default function Winner() {
  const winner = useRecoilValue(winnerState);

  if (!winner) return;

  return (
    <div className="mx-auto px-4 pt-32 2xl:max-w-[1500px] ">
      <h2
        className={"text-center text-4xl text-text-primary " + medium.className}
      >
        우승
      </h2>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <h3 className="text-2xl text-text-primary">{`눕프핵 ${winner.workInfo.episode}회 :  ${winner.workInfo.subject}`}</h3>
        <Link href={`/architect/${winner.workInfo.minecraft_id}`}>
          <h4 className="text-xl text-text-secondary hover:text-text-primary">{`${winner.workInfo.minecraft_id}`}</h4>
        </Link>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="rounded-md bg-background-secondary px-3 py-2 text-text-secondary"
          onClick={() => location.reload()}
        >
          다시하기
        </button>
        <button className="rounded-md bg-background-secondary px-3 py-2 text-text-secondary">
          랭킹보기
        </button>
      </div>
      <div className="relative mx-auto mt-4 aspect-video xl:max-w-[1000px] 2xl:max-w-[1200px]">
        <Image
          alt="우승 작품"
          sizes="1400px"
          fill
          src={renameTo1080Webp(winner.workInfo.image_url)}
        />
      </div>
    </div>
  );
}
