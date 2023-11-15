import { useState } from "react";
import Image from "next/image";
import { produce } from "immer";

import ArrowDown from "../../../../public/icons/arrow_down.svg";
import { EventNoobProHacker } from "@/domains/eventNoobProHacker";
import { renameTo1080Webp } from "@/domains/noobprohacker";

type Props = {
  content: EventNoobProHacker;
};

export default function Carousel(props: Props) {
  const { content } = props;
  const [page, setPage] = useState(new Array(content.lineInfo.length).fill(0));
  const [isOpenPopOver, setIsOpenPopOver] = useState(
    Array.from(Array(content.lineInfo.length), () =>
      Array(content.lineInfo[0].line_details.length).fill(false),
    ),
  );

  return (
    <main className="mb-24 flex flex-col gap-12 md:gap-24 xl:gap-36">
      {content.lineInfo.map((item, index) => (
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
          <div className="mt-8 flex aspect-video overflow-x-scroll  xl:aspect-auto xl:h-[50vh] xl:overflow-x-hidden">
            <div
              className="relative mx-auto flex max-w-[1200px] gap-14 duration-1000 ease-in-out"
              style={{
                transform: `translateX(calc(${
                  -page[index] * 50 * (16 / 9)
                }vh - ${page[index] * 56}px))`,
              }}
            >
              {item.line_details.map((line, detailIndex) => (
                <div
                  key={line.minecraft_id[0]}
                  className="group relative aspect-video hover:cursor-pointer [&>img]:rounded-xl"
                  onClick={() => {
                    if (line.youtube_url === "null") return;

                    window.open(line.youtube_url);
                  }}
                >
                  <Image
                    sizes="1200px"
                    alt="라인 이미지"
                    fill
                    src={renameTo1080Webp(line.image_url)}
                  />
                  <div className="peer absolute left-0 top-3 flex flex-col gap-1 rounded-2xl hover:cursor-auto md:left-10 md:top-10 md:gap-3">
                    <div className="flex items-end pl-3">
                      <p
                        className="text-xl text-[white] lg:text-2xl"
                        style={{ textShadow: "1px 1px 1px #222" }}
                      >
                        {line.line}
                      </p>
                      {line.minecraft_id.length > 1 && (
                        <span
                          className="ml-2 rounded-md bg-[rgba(64,64,64,0.4)] duration-300 hover:cursor-pointer lg:ml-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[white] hover:[&>svg]:fill-[#ddd] xl:[&>svg]:h-7 xl:[&>svg]:w-7"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsOpenPopOver(
                              produce((draft) => {
                                draft[index][detailIndex] =
                                  !draft[index][detailIndex];
                              }),
                            );
                          }}
                          style={{
                            transform: `rotate(${
                              isOpenPopOver[index][detailIndex]
                                ? "180deg"
                                : "0deg"
                            })`,
                          }}
                        >
                          <ArrowDown />
                        </span>
                      )}
                      <p
                        className="ml-3 text-base text-[white] lg:ml-6 xl:text-lg"
                        style={{ textShadow: "1px 1px 1px #222" }}
                      >
                        {line.ranking}위
                      </p>
                    </div>
                    <div
                      className="text-[#ccc]"
                      style={{ textShadow: "1px 1px 1px #222" }}
                    >
                      {line.minecraft_id.length < 2 ? (
                        <span className="ml-3 hover:cursor-pointer hover:text-[white]">
                          {line.minecraft_id}
                        </span>
                      ) : (
                        <div
                          className="grid w-[100%] grid-cols-3 gap-3 gap-x-6 rounded-lg bg-[rgba(0,0,0,0.5)] p-2 py-4 text-center text-sm lg:p-4 lg:text-base"
                          style={{
                            display: isOpenPopOver[index][detailIndex]
                              ? "grid"
                              : "none",
                          }}
                        >
                          {line.minecraft_id.map((item) => (
                            <span
                              className="text-[#ccc] hover:cursor-pointer hover:text-[white]"
                              style={{ textShadow: "1px 1px 1px #222" }}
                              key={item}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {line.youtube_url !== "null" && (
                    <div className="invisible absolute bottom-2 right-2 flex items-center justify-center rounded-md bg-[rgba(0,0,0,0.8)] p-1 px-2 text-sm text-[white] group-hover:visible peer-hover:invisible lg:bottom-6 lg:right-6 lg:p-2 lg:px-4 lg:text-lg">
                      클릭하여 유튜브 링크 열기
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-16 hidden h-20 max-w-[1200px] justify-center xl:flex">
            <div className="flex h-[56px] items-center justify-center gap-4 rounded-[48px] bg-background-secondary px-10">
              {item.line_details.map((line, i) => (
                <span
                  key={line.minecraft_id[0]}
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
