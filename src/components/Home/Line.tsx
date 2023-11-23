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
      <ul className="mt-8 flex gap-8">
        <div className="h-full w-[3px] bg-[#888] "></div>
        {lines.map((line, index) => (
          <Fragment key={line.subject}>
            <li
              onClick={() => handleLineClick(index)}
              className={`text-lg hover:cursor-pointer hover:text-[white] ${
                curLine === index ? "text-[white]" : "text-[#999]"
              }`}
            >
              {line.subject}
            </li>
            <div className="h-full w-[3px] bg-[#888]"></div>
          </Fragment>
        ))}
      </ul>
      <div className="overflow-hidden">
        <div
          className={`mt-16 flex gap-8 duration-500 `}
          style={{ transform: `translateX(calc(${-curLine} * (100% + 32px)))` }}
        >
          {lines.map((line, index) => {
            return (
              <div key={line.subject} className="flex w-full gap-8">
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
                      className="group relative h-[45vh] max-h-[480px] w-[30vw] overflow-hidden hover:cursor-pointer [&>img]:duration-[500ms] [&>img]:hover:scale-105"
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
