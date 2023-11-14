"use client";

import Image from "next/image";
import Link from "next/link";

import { medium } from "../layout";
import LinkIcon from "../../../public/icons/link.svg";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>
        컨텐츠
      </h1>
      <p className="mt-4 text-base text-text-secondary">
        눕프로해커 이외의 마인크래프트 컨텐츠를 볼 수 있다.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <div className="group rounded-xl bg-background-secondary duration-300 hover:-translate-y-2">
          <Link href={"/content/event_noobprohacker/41"}>
            <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-background-secondary [&>img]:brightness-[60%] [&>img]:duration-300 group-hover:[&>img]:scale-105 group-hover:[&>img]:filter-none">
              <Image
                fill
                alt="이미지"
                sizes="400px"
                src={"https://i.ytimg.com/vi/P59C-l_aaX8/hq720.jpg"}
              />
            </div>
            <div className="px-4 pb-4 pt-6">
              <div className="flex items-center gap-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:rotate-[135deg] [&>svg]:fill-text-tertiary">
                <h2 className="text-xl text-text-primary">티어 맞추기</h2>
                <LinkIcon />
              </div>
              <h3 className="my-4 text-base text-text-secondary">
                익명의 건축가가 만든 작품을 우왁굳이 추측해서 건축가의 현재
                티어를 맞추는 컨텐츠이다.
              </h3>
              <p className="rounded-md text-end text-sm text-text-secondary">
                2023-10-25
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
