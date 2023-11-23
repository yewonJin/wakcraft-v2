"use client";

import Image from "next/image";

import LinkIcon from "../../../public/icons/link.svg";
import { medium } from "@/app/layout";
import {
  NoobProHacker,
  getHackerWinnerLine,
  getProWinnerLine,
  renameTo1080Webp,
} from "@/domains/noobprohacker";

type Props = {
  noobprohackers: NoobProHacker[];
};

export default function RecentWinner(props: Props) {
  const { noobprohackers } = props;

  return (
    <div className="mx-auto my-32 max-w-[1200px] px-4 xl:px-0 ">
      <h3 className={`${medium.className} text-3xl text-text-primary`}>
        최근 우승 작품
      </h3>
      <div
        className={`relative mt-10 flex flex-wrap gap-5 gap-y-8  md:[&>div:nth-child(2)]:flex-row-reverse`}
      >
        {noobprohackers.map((noobprohacker, index) => (
          <div
            className="flex w-full flex-col gap-5 md:flex-row"
            key={noobprohacker.contentInfo.episode}
          >
            <div
              style={{
                boxShadow: "1px 1px 5px #222",
              }}
              className={`relative aspect-video w-full rounded-3xl hover:cursor-pointer md:w-3/5 [&>img]:rounded-3xl`}
              onClick={() =>
                window.open(
                  renameTo1080Webp(
                    getHackerWinnerLine(noobprohacker).line_details.hacker
                      .image_url,
                  ),
                )
              }
            >
              <Image
                alt="해커 우승 작품"
                sizes="800px"
                fill
                src={renameTo1080Webp(
                  getHackerWinnerLine(noobprohacker).line_details.hacker
                    .image_url,
                )}
              />
              <div
                className="absolute bottom-4 left-[50%] z-10 flex w-max translate-x-[-50%] items-center gap-4 rounded-lg bg-[rgba(0,0,0,0.7)] px-4 py-2 text-[white] hover:cursor-auto"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <span
                  className="hidden pt-[2px] hover:cursor-pointer sm:block [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#aaa] [&>svg]:hover:fill-[white]"
                  onClick={() =>
                    window.open(
                      getHackerWinnerLine(noobprohacker).line_details.hacker
                        .youtube_url,
                    )
                  }
                >
                  <LinkIcon />
                </span>
                <p className="text-base sm:text-lg">
                  <span className="text-[#ddd]">{`${noobprohacker.contentInfo.episode}회 : `}</span>
                  {getHackerWinnerLine(noobprohacker).subject}
                </p>
                <p className="text-sm text-[#ddd] sm:text-base">
                  {
                    getHackerWinnerLine(noobprohacker).line_details.hacker
                      .minecraft_id
                  }
                </p>
              </div>
            </div>
            <div
              className={`relative aspect-video w-full rounded-3xl hover:cursor-pointer md:w-2/5 [&>img]:rounded-3xl `}
              style={{
                boxShadow: "1px 1px 5px #222",
              }}
              onClick={() =>
                window.open(
                  renameTo1080Webp(
                    getProWinnerLine(noobprohacker).line_details.pro.image_url,
                  ),
                )
              }
            >
              <Image
                alt="프로 우승 작품"
                sizes="500px"
                fill
                style={{ objectFit: "cover" }}
                src={renameTo1080Webp(
                  getProWinnerLine(noobprohacker).line_details.pro.image_url,
                )}
              />
              <div
                className="absolute bottom-4 left-[50%] z-10 flex w-max translate-x-[-50%] items-center gap-4 rounded-lg bg-[rgba(0,0,0,0.7)] px-4 py-2 text-[white] hover:cursor-auto"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <span
                  className="hidden pt-[2px] hover:cursor-pointer sm:block [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#aaa] [&>svg]:hover:fill-[white]"
                  onClick={() =>
                    window.open(
                      getProWinnerLine(noobprohacker).line_details.pro
                        .youtube_url,
                    )
                  }
                >
                  <LinkIcon />
                </span>
                <p className="text-base sm:text-lg">
                  <span className="text-[#ddd]">{`${noobprohacker.contentInfo.episode}회 : `}</span>
                  {getProWinnerLine(noobprohacker).subject}
                </p>
                <p className="text-sm text-[#ddd] sm:text-base">
                  {
                    getProWinnerLine(noobprohacker).line_details.pro
                      .minecraft_id
                  }
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
<Fragment>
                  <div className="relative col-span-3 aspect-video [&>img]:rounded-3xl">
          <Image
            fill
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2041/CloudyWithAChanceOfMeatballs-hacker.1080p.webp"
            }
          />
          <div className="absolute bottom-4 left-[50%] z-10 flex w-max translate-x-[-50%] items-center gap-4 rounded-lg bg-[rgba(0,0,0,0.7)] px-4 py-2 text-[white]">
            <span className="pt-1 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#ddd]">
              <LinkIcon />
            </span>

            <p className="text-lg">
              <span className="text-[#ddd]">41회 :</span> 하늘에서 음식이
              내린다면
            </p>
            <p className="text-[#ddd]">kkio_126</p>
          </div>
        </div>
        <div
          className="relative col-span-2 rounded-3xl hover:cursor-pointer [&>img]:rounded-3xl"
          style={{ boxShadow: "1px 1px 5px #222" }}
          onClick={() =>
            window.open(
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2041/Frieren-pro.1080p.webp",
            )
          }
        >
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2041/Frieren-pro.1080p.webp"
            }
          />
          <div
            className="absolute bottom-4 left-[50%] z-10 flex w-max translate-x-[-50%] items-center gap-4 rounded-lg bg-[rgba(0,0,0,0.7)] px-4 py-2 text-[white] hover:cursor-auto"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span className="pt-[2px] hover:cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#aaa] [&>svg]:hover:fill-[white]">
              <LinkIcon />
            </span>
            <p className="text-lg">프리렌</p>
            <p className="text-[#ddd]">Heyd3vel</p>
          </div>
        </div>
        </Fragment>
*/
