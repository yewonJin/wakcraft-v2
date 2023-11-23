"use client";

import { useState } from "react";
import Image from "next/image";
import { produce } from "immer";

import { Line, translateLine } from "@/domains/architect";
import { NoobProHacker, renameTo1080Webp } from "@/domains/noobprohacker";

type Props = {
  noobprohacker: NoobProHacker;
};

export default function Carousel(props: Props) {
  const { noobprohacker } = props;
  const [page, setPage] = useState(
    new Array(noobprohacker.lineInfo.length).fill(0),
  );

  const { lineInfo } = noobprohacker;

  return (
    <main className="mb-24 flex flex-col gap-12 md:gap-24 xl:gap-36">
      {lineInfo.map((item, index) => (
        <section key={item.subject}>
          <div className="mx-auto mt-12 flex max-w-[1200px] items-center justify-between xl:mt-24">
            <div className="flex justify-between xl:w-[45vw]">
              <h2
                id={item.subject}
                className="flex scroll-mt-[20vh] items-center gap-3"
              >
                <p className="text-text-secondary">{index + 1 + "라인"}</p>
                <p className="text-xl text-text-primary md:text-2xl">
                  {item.subject}
                </p>
                <div className="mx-2 h-8 w-[1px] bg-background-tertiary"></div>
                <p className="text-lg text-text-primary md:text-xl">
                  {item.line_ranking + "위"}
                </p>
              </h2>
            </div>
          </div>
          <div
            className={
              "mt-8 flex aspect-video overflow-x-scroll xl:aspect-auto xl:h-[50vh] xl:overflow-x-hidden " +
              "category-scrollbar"
            }
          >
            <div
              className="relative mx-auto flex max-w-[1200px] gap-14 duration-1000 ease-in-out"
              style={{
                transform: `translateX(calc(${
                  -page[index] * 50 * (16 / 9)
                }vh - ${page[index] * 56}px))`,
              }}
            >
              {Object.keys(item.line_details).map((line) => {
                return (
                  <div
                    key={item.line_details[line as Line].minecraft_id}
                    className="group relative aspect-video hover:cursor-pointer [&>img]:rounded-xl"
                    onClick={() => {
                      if (
                        item.line_details[line as Line].youtube_url === "null"
                      )
                        return;

                      window.open(item.line_details[line as Line].youtube_url);
                    }}
                  >
                    <Image
                      sizes="900px"
                      alt="라인 이미지"
                      priority
                      fill
                      src={renameTo1080Webp(
                        item.line_details[line as Line].image_url,
                      )}
                    />
                    <div className="peer absolute left-0 top-3 flex flex-col gap-1 rounded-2xl hover:cursor-auto md:left-10 md:top-10 md:gap-3">
                      <div className="flex items-end pl-3">
                        <p
                          className=" text-xl text-[white] lg:text-2xl"
                          style={{ textShadow: "1px 1px 1px #222" }}
                        >
                          {translateLine(line as Line)}
                        </p>
                        <p
                          className="ml-3 text-base text-[white] lg:ml-6 xl:text-lg"
                          style={{ textShadow: "1px 1px 1px #222" }}
                        >
                          {item.line_details[line as Line].ranking}위
                        </p>
                      </div>
                      <p
                        className="ml-3 text-[#ccc] hover:cursor-pointer hover:text-[white]"
                        style={{ textShadow: "1px 1px 1px #222" }}
                      >
                        {item.line_details[line as Line].minecraft_id}
                      </p>
                    </div>
                    {item.line_details[line as Line].youtube_url !== "null" && (
                      <div className="invisible absolute bottom-6 right-6 flex items-center justify-center rounded-md bg-[rgba(0,0,0,0.8)] p-2 px-4 text-[white] group-hover:visible">
                        클릭하여 유튜브 링크 열기
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mx-auto mt-16 hidden h-20 max-w-[1200px] justify-center xl:flex">
            <div className="flex h-[56px] items-center justify-center gap-4 rounded-[48px] bg-background-secondary px-10">
              <span
                className={`h-3 ${
                  page[index] === 0 ? "w-12" : "w-3"
                } rounded-full bg-text-tertiary duration-500 hover:cursor-pointer`}
                onClick={() => {
                  setPage(
                    produce((draft) => {
                      draft[index] = 0;
                    }),
                  );
                }}
              />
              <span
                className={`h-3 ${
                  page[index] === 1 ? "w-12" : "w-3"
                } rounded-full bg-text-tertiary duration-500 hover:cursor-pointer`}
                onClick={() => {
                  setPage(
                    produce((draft) => {
                      draft[index] = 1;
                    }),
                  );
                }}
              />
              <span
                className={`h-3 ${
                  page[index] === 2 ? "w-12" : "w-3"
                } rounded-full bg-text-tertiary duration-500 hover:cursor-pointer`}
                onClick={() => {
                  setPage(
                    produce((draft) => {
                      draft[index] = 2;
                    }),
                  );
                }}
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
