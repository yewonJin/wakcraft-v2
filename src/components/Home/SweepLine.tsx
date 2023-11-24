"use client";

import { useState } from "react";
import Image from "next/image";

import { medium } from "@/app/layout";
import { SweepLine, renameToWebp } from "@/domains/noobprohacker";
import ArrowBack from "../../../public/icons/arrow_back.svg";
import Link from "next/link";

type Props = {
  sweepLines: SweepLine[];
};

export default function SweepLine(props: Props) {
  const { sweepLines } = props;

  const [page, setPage] = useState(0);

  return (
    <div className="mx-auto mt-20 max-w-[1200px] px-4 pb-10 xl:mt-48 xl:px-0 ">
      <div className="flex items-end gap-4">
        <h3
          className={`${medium.className} text-2xl text-text-primary sm:text-3xl`}
        >
          싹쓸이 라인
        </h3>
        <p className="text-text-secondary">(프로 1등, 해커 1등, 라인 1등)</p>
      </div>
      <div className="relative mt-8">
        <span
          className={`absolute -top-3 right-28 rounded-full bg-background-secondary p-3 hover:cursor-pointer hover:bg-background-tertiary xl:-left-20 xl:right-auto xl:top-[50%] [&>svg]:fill-text-tertiary ${
            page === 0 ? "hidden" : ""
          }`}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ArrowBack />
        </span>
        <span
          className={`absolute -top-3 right-5 rounded-full bg-background-secondary p-3 hover:cursor-pointer hover:bg-background-tertiary xl:-right-20 xl:top-[50%] [&>svg]:rotate-180 [&>svg]:fill-text-tertiary ${
            page === sweepLines.length - 1 ? "hidden" : ""
          }`}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ArrowBack />
        </span>
        <div className="flex items-center gap-1 text-lg text-text-secondary">
          <p className="">{`EP${sweepLines[page].episode} : `}</p>
          <span className="text-xl text-text-primary">
            {sweepLines[page].subject}
          </span>
        </div>
        <div className="overflow-hidden pb-5">
          <div
            className="mt-1 flex gap-8 duration-300"
            style={{ transform: `translateX(calc(${-page} * (100% + 32px)))` }}
          >
            {sweepLines.map((sweepLine) => (
              <div
                key={sweepLine.subject}
                className="mt-8 flex w-full flex-col gap-8 md:flex-row"
              >
                <div
                  className="group relative h-[60vw]  max-h-[480px] w-[calc(100vw-32px)] overflow-hidden rounded-2xl md:h-[40vh] md:w-[30vw] [&>img]:rounded-2xl [&>img]:duration-300 hover:[&>img]:scale-105"
                  style={{
                    boxShadow: "1px 1px 5px #222",
                  }}
                >
                  <Image
                    alt="싹쓸이 라인 이미지"
                    sizes="900px"
                    style={{ objectFit: "cover" }}
                    fill
                    src={renameToWebp(sweepLine.line_details.noob.image_url)}
                  />
                  <div className="invisible absolute bottom-2 z-10 flex w-full justify-center text-lg text-[white] hover:cursor-default group-hover:visible">
                    <div className="flex w-fit gap-4 rounded-2xl bg-[#121212] px-6 py-2 group-hover:animate-fadeIn">
                      <Link
                        href={`/architect/${sweepLine.line_details.noob.minecraft_id}`}
                      >
                        <p className="text-[#aaa] hover:cursor-pointer hover:text-[white]">
                          {sweepLine.line_details.noob.minecraft_id}
                        </p>
                      </Link>
                      <p>눕</p>
                    </div>
                  </div>
                </div>
                <div
                  className="group relative h-[60vw]  max-h-[480px] w-[calc(100vw-32px)] overflow-hidden rounded-2xl md:h-[40vh] md:w-[30vw] [&>img]:rounded-2xl [&>img]:duration-300 hover:[&>img]:scale-105"
                  style={{
                    boxShadow: "1px 1px 5px #222",
                  }}
                >
                  <Image
                    alt="싹쓸이 라인 이미지"
                    sizes="900px"
                    style={{ objectFit: "cover" }}
                    fill
                    src={renameToWebp(sweepLine.line_details.pro.image_url)}
                  />
                  <div className="invisible absolute bottom-2 z-10 flex w-full justify-center text-lg text-[white] hover:cursor-default group-hover:visible">
                    <div className="flex w-fit gap-4 rounded-2xl bg-[#121212] px-6 py-2 group-hover:animate-fadeIn">
                      <Link
                        href={`/architect/${sweepLine.line_details.pro.minecraft_id}`}
                      >
                        <p className="text-[#aaa] hover:cursor-pointer hover:text-[white]">
                          {sweepLine.line_details.pro.minecraft_id}
                        </p>
                      </Link>
                      <p>프로</p>
                    </div>
                  </div>
                </div>
                <div
                  className="group relative h-[60vw]  max-h-[480px] w-[calc(100vw-32px)] overflow-hidden rounded-2xl md:h-[40vh] md:w-[30vw] [&>img]:rounded-2xl [&>img]:duration-300 hover:[&>img]:scale-105"
                  style={{
                    boxShadow: "1px 1px 5px #222",
                  }}
                >
                  <Image
                    alt="싹쓸이 라인 이미지"
                    sizes="900px"
                    style={{ objectFit: "cover" }}
                    fill
                    src={renameToWebp(sweepLine.line_details.hacker.image_url)}
                  />
                  <div className="invisible absolute bottom-2 z-10 flex w-full justify-center text-lg text-[white] hover:cursor-default group-hover:visible">
                    <div className="flex w-fit gap-4 rounded-2xl bg-[#121212] px-6 py-2 group-hover:animate-fadeIn">
                      <Link
                        href={`/architect/${sweepLine.line_details.hacker.minecraft_id}`}
                      >
                        <p className="text-[#aaa] hover:cursor-pointer hover:text-[white]">
                          {sweepLine.line_details.hacker.minecraft_id}
                        </p>
                      </Link>
                      <p>해커</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
