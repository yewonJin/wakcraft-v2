"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { produce } from "immer";

import { renameTo1080Webp } from "@/domains/noobprohacker";
import { ArchitectureContest } from "@/domains/architectureContest";

type Props = {
  content: ArchitectureContest;
};

export default function Carousel(props: Props) {
  const { content } = props;
  const [page, setPage] = useState(new Array(7).fill(0));

  const { lineInfo } = content;

  return (
    <main className="mb-24 flex flex-col gap-12 md:gap-24 xl:gap-36">
      {lineInfo.map((item, index) => (
        <section key={item.line}>
          <div className="mx-auto mt-12 flex max-w-[1200px] items-center justify-between xl:mt-24">
            <div className="flex justify-between xl:w-[45vw]">
              <h2
                id={item.line}
                className="flex scroll-mt-[20vh] items-center gap-3"
              >
                <p className="text-text-secondary">{index + 1 + "라인"}</p>
                <p className="text-xl text-text-primary md:text-2xl">
                  {item.line}
                </p>
              </h2>
            </div>
          </div>
          <div
            className={
              "mt-8 flex aspect-video overflow-x-scroll  xl:aspect-auto xl:h-[50vh] xl:overflow-x-hidden " +
              "category-scrollbar"
            }
          >
            <div
              className="relative mx-auto flex w-full max-w-[1200px] gap-14 duration-1000 ease-in-out"
              style={{
                transform: `translateX(calc(${
                  -page[index] * 50 * (16 / 9)
                }vh - ${page[index] * 56}px))`,
              }}
            >
              {item.line_details.map((line) => {
                return (
                  <div
                    key={line.minecraft_id}
                    className="group relative aspect-video h-full [&>img]:rounded-xl"
                  >
                    <Image
                      sizes="1200px"
                      alt="라인 이미지"
                      fill
                      src={renameTo1080Webp(line.image_url)}
                    />
                    <div className="peer absolute left-3 top-3 flex flex-col gap-1 rounded-2xl hover:cursor-auto md:left-10 md:top-10 md:gap-3">
                      <p
                        className=" text-sm text-[#ddd] lg:text-lg"
                        style={{ textShadow: "1px 1px 1px #222" }}
                      >
                        {line.topText}
                      </p>
                      <div className="flex items-center gap-2 md:items-end">
                        <p
                          className=" text-lg text-[white] lg:text-2xl"
                          style={{ textShadow: "1px 1px 1px #222" }}
                        >
                          {line.bottomText}
                        </p>
                        <p
                          className="text-sm text-[white] lg:ml-6 xl:text-lg"
                          style={{ textShadow: "1px 1px 1px #222" }}
                        >
                          {line.ranking}위
                        </p>
                      </div>
                      <Link href={`/architect/${line.minecraft_id}`}>
                        <p
                          className="text-sm text-[#ccc] hover:cursor-pointer hover:text-[white] md:text-base"
                          style={{ textShadow: "1px 1px 1px #222" }}
                        >
                          {line.minecraft_id}
                        </p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mx-auto mt-16 hidden h-20 max-w-[1200px] justify-center xl:flex">
            <div className="flex h-[56px] items-center justify-center gap-4 rounded-[48px] bg-background-secondary px-10">
              {item.line_details.map((line, i) => (
                <span
                  key={line.minecraft_id}
                  className={`h-3 ${
                    page[index] === i ? "w-12" : "w-3"
                  } rounded-full bg-text-tertiary duration-500 hover:cursor-pointer`}
                  onClick={() => {
                    setPage(
                      produce((draft) => {
                        draft[index] = i;
                      }),
                    );
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
