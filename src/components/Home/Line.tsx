"use client";

import { Fragment } from "react";
import Image from "next/image";

import {
  NoobProHacker,
  renameToWebp,
  translateLineTiersToKorean,
} from "@/domains/noobprohacker";
import useLineScroll from "@/hooks/useLineScroll";
import Link from "next/link";

type Props = {
  lines: NoobProHacker["lineInfo"];
};

export default function Line(props: Props) {
  const { lines } = props;
  const { curLine, handleLineClick, initInterval, startInterval } =
    useLineScroll(lines);

  return (
    <Fragment>
      <div
        className={
          "mt-8 overflow-y-hidden overflow-x-scroll pb-4 md:overflow-auto " +
          "category-scrollbar"
        }
      >
        <ul className="flex w-max flex-wrap gap-4 md:gap-8">
          <div className="hidden h-[28px] w-[3px] bg-[#888] md:block"></div>
          {lines.map((line, index) => (
            <Fragment key={line.subject}>
              <li
                onClick={() => handleLineClick(index)}
                className={`w-max rounded-md bg-[rgba(0,0,0,0.8)] p-2 px-3 text-base hover:cursor-pointer hover:text-[white] md:w-auto md:rounded-none md:bg-[rgba(0,0,0,0)] md:p-0 md:text-lg ${
                  curLine === index ? "text-[white]" : "text-[#999]"
                }`}
              >
                {line.subject}
              </li>
              <div className="hidden h-[28px] w-[3px] bg-[#888] md:block"></div>
            </Fragment>
          ))}
        </ul>
      </div>
      <div className="overflow-hidden">
        <div
          className={`mt-4 flex gap-8 duration-500 md:mt-10 `}
          style={{ transform: `translateX(calc(${-curLine} * (100% + 32px)))` }}
        >
          {lines.map((line, index) => {
            return (
              <div
                key={line.subject}
                className="flex w-full flex-col justify-center gap-6 md:flex-row md:gap-8"
              >
                {lineTiers.map((lineTier) => {
                  return (
                    <div
                      onMouseOver={() => {
                        initInterval();
                      }}
                      onMouseOut={() => {
                        startInterval();
                      }}
                      key={line.line_details[lineTier].minecraft_id}
                      className="group relative h-[60vw] max-h-[480px] w-[calc(100vw-32px)] overflow-hidden hover:cursor-pointer md:h-[45vh] md:w-[30vw] [&>img]:duration-[500ms] [&>img]:hover:scale-105"
                    >
                      <Image
                        alt="작품 이미지"
                        priority
                        style={{ objectFit: "cover" }}
                        fill
                        src={renameToWebp(
                          line.line_details[lineTier].image_url,
                        )}
                      />
                      <div className="invisible absolute bottom-2 z-10 flex w-full justify-center text-lg text-[white] hover:cursor-default group-hover:visible">
                        <div className="flex w-fit gap-4 rounded-2xl bg-[#121212] px-6 py-2 group-hover:animate-fadeIn">
                          <Link
                            href={`/architect/${line.line_details[lineTier].minecraft_id}`}
                          >
                            <p className="text-[#aaa] hover:cursor-pointer hover:text-[white]">
                              {line.line_details[lineTier].minecraft_id}
                            </p>
                          </Link>
                          <p>{translateLineTiersToKorean(lineTier)}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

const lineTiers = ["noob", "pro", "hacker"] as ("noob" | "pro" | "hacker")[];
