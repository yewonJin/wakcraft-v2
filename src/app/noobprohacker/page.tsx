"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { medium } from "../layout";
import LinkIcon from "../../../public/icons/link.svg";

export default function Page() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>
        눕프로해커
      </h1>
      <p className="mt-4 text-base text-text-secondary">
        마인크래프트 눕프로해커 컨텐츠를 볼 수 있다.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <div className="group rounded-xl bg-background-secondary duration-300 hover:-translate-y-2">
          <Link href={"/noobprohacker/41"}>
            <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-background-secondary [&>img]:brightness-[60%] [&>img]:duration-300 group-hover:[&>img]:scale-105 group-hover:[&>img]:filter-none">
              <Image
                fill
                alt="이미지"
                src={
                  "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2041/Zombieman-hacker.webp"
                }
              />
            </div>
            <div className="px-4 pb-4 pt-6">
              <div className="flex items-center gap-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:rotate-[135deg] [&>svg]:fill-text-tertiary">
                <h2 className="text-xl text-text-primary">
                  제 41회 눕프로해커
                </h2>
                <LinkIcon />
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-text-secondary">
                <span
                  className="rounded-md bg-background-primary px-2 py-1 duration-300 hover:bg-background-tertiary"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/noobprohacker/1#아카드");
                  }}
                >
                  #아카드
                </span>
                <span
                  className="rounded-md bg-background-primary px-2 py-1 duration-300 hover:bg-background-tertiary"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/noobprohacker/1#짐 캐리");
                  }}
                >
                  #짐 캐리
                </span>
                <span
                  className="rounded-md bg-background-primary px-2 py-1 duration-300 hover:bg-background-tertiary"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/noobprohacker/1#하늘에서 음식이 내린다면");
                  }}
                >
                  #하늘에서 음식이 내린다면
                </span>
                <span
                  className="rounded-md bg-background-primary px-2 py-1 duration-300 hover:bg-background-tertiary"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/noobprohacker/1#좀비맨");
                  }}
                >
                  #좀비맨
                </span>
                <span
                  className="rounded-md bg-background-primary px-2 py-1 duration-300 hover:bg-background-tertiary"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/noobprohacker/1#프리렌");
                  }}
                >
                  #프리렌
                </span>
              </div>
              <p className="rounded-md text-end text-sm text-text-secondary">
                2023-10-25
              </p>
            </div>
          </Link>
        </div>
        <div className="group rounded-xl bg-background-secondary pb-4 duration-300 hover:-translate-y-2">
          <Link href={"/architect"}>
            <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-background-secondary [&>img]:brightness-[60%] [&>img]:duration-300 group-hover:[&>img]:scale-105 group-hover:[&>img]:filter-none">
              <Image
                fill
                alt="이미지"
                src={
                  "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2040/Naruto-hacker.webp"
                }
              />
            </div>
            <div className="mt-6 px-4">
              <div className="flex gap-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary">
                <p className="text-xl text-text-primary">제 40회 눕프로해커</p>
                <LinkIcon />
              </div>
              <div className="mt-4 flex">
                <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
                  <span className="rounded-md bg-background-primary px-2 py-1">
                    #스파이더맨
                  </span>
                  <span className="rounded-md bg-background-primary px-2 py-1">
                    #둠
                  </span>
                  <span className="rounded-md bg-background-primary px-2 py-1">
                    #데스해머 쵸로키
                  </span>
                  <span className="rounded-md bg-background-primary px-2 py-1">
                    #나루토
                  </span>
                  <span className="rounded-md bg-background-primary px-2 py-1">
                    #올마이트
                  </span>
                </div>
              </div>
              <p className="rounded-md text-end text-sm text-text-secondary">
                2023-10-21
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/*
<ul className="mt-8 flex h-16 items-center gap-2 rounded-md bg-background-secondary px-6 py-3 text-text-primary md:gap-8">
        <li className="flex-1">회차</li>
        <li className="flex-[3]">주제</li>
        <li className="flex-[4]">우승 라인</li>
        <li className="flex-[2]">우승 해커</li>
        <li className="flex-[2]">날짜</li>
        <li className="flex-1">링크</li>
      </ul>
      <ul className="">
        <li className="flex items-center gap-2 border-b-2 border-background-secondary px-6 py-6 text-text-primary md:gap-8">
          <p className="flex-1">41회</p>
          <p className="flex-[3]">귀멸의 칼날 환락의 거리</p>
          <p className="flex-[4]">하늘에서 음식이 내린다면</p>
          <p className="flex-[2]">canindaeyo</p>
          <p className="flex-[2]">2023-10-25</p>
          <p className="flex-1">1</p>
        </li>
        <li className="flex items-center gap-2 border-b-2 border-background-secondary px-6 py-6 text-text-primary md:gap-8">
          <p className="flex-1">40회</p>
          <p className="flex-[3]">자유</p>
          <p className="flex-[4]">아그니</p>
          <p className="flex-[2]">canindaeyo</p>
          <p className="flex-[2]">2023-10-18</p>
          <p className="flex-1">1</p>
        </li>
      </ul>
*/
