"use client";

import { Fragment, useState } from "react";
import { produce } from "immer";
import Image from "next/image";

import { medium } from "@/app/layout";
import { tempNoobProHackerObject } from "@/temp";
import { Line, translateLine } from "@/domains/architect";
import { renameTo1080Webp } from "@/domains/noobprohacker";

export default function Page() {
  const [state, setState] = useState([0, 0, 0, 0, 0]);

  return (
    <Fragment>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl text-text-secondary">제 41회</h2>
        <h1 className={`mt-4 text-4xl text-text-primary ${medium.className}`}>
          눕프로해커 : 자유
        </h1>
      </div>
      <main className="mb-24 flex flex-col gap-36">
        {tempNoobProHackerObject.lineInfo.map((item, index) => (
          <section key={item.subject}>
            <div className="mx-auto mt-24 flex max-w-[1200px] items-center justify-between">
              <div className="flex w-[45vw] justify-between">
                <h2
                  id={item.subject}
                  className="flex scroll-mt-[20vh] items-center gap-3"
                >
                  <p className="text-text-secondary">{index + 1 + "라인"}</p>
                  <p className="text-2xl text-text-primary">{item.subject}</p>
                  <div className="mx-3 h-7 w-[1px] bg-background-tertiary"></div>
                  <p className="text-xl text-text-primary">
                    {item.line_ranking + "위"}
                  </p>
                </h2>
              </div>
            </div>
            <div className="mt-8 flex h-[50vh] overflow-x-hidden">
              <div
                className="relative mx-auto flex max-w-[1200px] gap-14 duration-1000 ease-in-out"
                style={{
                  transform: `translateX(calc(${
                    -state[index] * 50 * (16 / 9)
                  }vh - ${state[index] * 56}px))`,
                }}
              >
                {Object.keys(item.line_details).map((line) => (
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
                      fill
                      src={renameTo1080Webp(
                        item.line_details[line as Line].image_url,
                      )}
                    />
                    <div className="absolute left-10 top-10 flex flex-col gap-3 rounded-2xl">
                      <div className="flex items-end gap-6">
                        <p
                          className=" text-2xl text-[white]"
                          style={{ textShadow: "1px 1px 5px #222" }}
                        >
                          {translateLine(line as Line)}
                        </p>
                        <p
                          className="text-lg text-[white]"
                          style={{ textShadow: "1px 1px 5px #222" }}
                        >
                          {item.line_details[line as Line].ranking}위
                        </p>
                      </div>
                      <p
                        className="text-lg text-[#ccc]"
                        style={{ textShadow: "1px 1px 5px #222" }}
                      >
                        {item.line_details[line as Line].minecraft_id}
                      </p>
                    </div>
                    {item.line_details[line as Line].youtube_url !== "null" ?? (
                      <div className=" invisible absolute bottom-6 right-6 flex items-center justify-center rounded-md bg-[rgba(0,0,0,0.8)] p-2 px-4 text-[white] group-hover:visible">
                        클릭하여 유튜브 링크 열기
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto mt-16 flex h-20 max-w-[1200px] justify-center">
              <div className="flex h-[56px] items-center justify-center gap-4 rounded-[48px] bg-background-secondary px-10">
                <span
                  className={`h-3 ${
                    state[index] === 0 ? "w-12" : "w-3"
                  } rounded-full bg-text-tertiary duration-500 hover:cursor-pointer`}
                  onClick={() => {
                    setState(
                      produce((draft) => {
                        draft[index] = 0;
                      }),
                    );
                  }}
                />
                <span
                  className={`h-3 ${
                    state[index] === 1 ? "w-12" : "w-3"
                  } rounded-full bg-text-tertiary duration-500 hover:cursor-pointer`}
                  onClick={() => {
                    setState(
                      produce((draft) => {
                        draft[index] = 1;
                      }),
                    );
                  }}
                />
                <span
                  className={`h-3 ${
                    state[index] === 2 ? "w-12" : "w-3"
                  } rounded-full bg-text-tertiary duration-500 hover:cursor-pointer`}
                  onClick={() => {
                    setState(
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
    </Fragment>
  );
}
