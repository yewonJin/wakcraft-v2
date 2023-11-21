"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

import PlayArrow from "../../../../public/icons/play_arrow.svg";
import Pause from "../../../../public/icons/pause.svg";
import ArrowDropUp from "../../../../public/icons/arrow_drop_up.svg";
import { getWorldCups } from "@/api/client/worldCup";
import { Worldcup } from "@/domains/worldCup";
import { renameTo1080Webp } from "@/domains/noobprohacker";

export default function InGame() {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  const [playLeftPlayer, setPlayLeftPlayer] = useState(false);
  const [playRightPlayer, setPlayRightPlayer] = useState(false);

  const [index, setIndex] = useState(0);
  const [arr, setArr] = useState<Worldcup[]>();

  const [isShow, setIsShow] = useState("");
  const [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    setIsWindow(true);

    getWorldCups().then((res) => setArr(res));
  }, []);

  if (!arr) return;

  return (
    <div className="relative mx-auto w-[1500px]">
      <div className="flex items-end gap-4">
        <h2 className="text-3xl text-text-primary">128강</h2>
        <p className="text-2xl text-text-secondary">(1/3)</p>
      </div>
      <div className="relative mt-4 flex gap-4 ">
        <div
          className={`relative flex-1 overflow-hidden hover:cursor-pointer [&>img]:duration-300 ${
            isShow === "right" ? "flex-none" : "flex-1"
          } ${isShow !== "" ? "duration-500" : "[&>img]:hover:scale-105"}
            }`}
          style={{
            aspectRatio: isShow !== "left" ? "1/1" : "16/9",
          }}
          onClick={() => {
            if (!isClickable) return;

            setIsShow("left");
            setIsClickable(false);
            setPlayLeftPlayer(false);
            setPlayRightPlayer(false);

            setTimeout(() => {
              setIsShow("");
              setIndex((prev) => prev + 2);
            }, 1800);

            setTimeout(() => {
              setIsClickable(true);
            }, 2000);
          }}
        >
          <Image
            alt="왼쪽 월드컵 이미지"
            objectFit="cover"
            priority
            fill
            src={renameTo1080Webp(arr[index].workInfo.image_url)}
          />

          {arr[index + 2] && (
            <Image
              fill
              style={{ display: "none" }}
              alt="preload 이미지"
              priority
              src={renameTo1080Webp(arr[index + 2].workInfo.image_url)}
            />
          )}
          <div
            className="absolute bottom-4 left-[50%] flex w-max translate-x-[-50%] items-center gap-4 rounded-lg bg-[rgba(0,0,0,0.8)] px-4 py-2 text-[white] hover:cursor-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="peer hover:scale-105 hover:cursor-pointer [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ccc] hover:[&>svg]:fill-[white]"
              onClick={() => {
                setPlayLeftPlayer(!playLeftPlayer);
              }}
            >
              {playLeftPlayer ? <Pause /> : <PlayArrow />}
            </span>
            <div className=" invisible absolute -top-12 left-1 w-max rounded-md bg-[rgba(0,0,0,0.9)] px-2 py-2 text-sm peer-hover:visible [&>svg]:absolute [&>svg]:left-[3px] [&>svg]:top-4 [&>svg]:h-11 [&>svg]:w-11 [&>svg]:rotate-180 [&>svg]:fill-[rgba(0,0,0,0.9)]">
              <ArrowDropUp />
              {playLeftPlayer ? "영상 숨기기" : "영상 재생하기"}
            </div>
            <p className="text-lg text-[#ccc]">{`제 ${arr[index].workInfo.episode}회 눕프핵`}</p>
            <p className="pb-[2px] text-lg">
              {arr[index].workInfo.minecraft_id}
            </p>
          </div>
        </div>
        <div
          className={`relative ${isShow === "left" ? "flex-none" : "flex-1"} ${
            isShow !== "" ? "duration-500" : "[&>img]:hover:scale-105"
          }
             overflow-hidden hover:cursor-pointer [&>img]:duration-500 [&>img]:hover:scale-105`}
          style={{
            aspectRatio: isShow !== "right" ? "1/1" : "16/9",
          }}
          onClick={() => {
            if (!isClickable) return;

            setIsShow("right");
            setIsClickable(false);
            setPlayLeftPlayer(false);
            setPlayRightPlayer(false);

            setTimeout(() => {
              setIsShow("");
              setIndex((prev) => prev + 2);
            }, 1800);

            setTimeout(() => {
              setIsClickable(true);
            }, 2000);
          }}
        >
          <Image
            alt="오른쪽 월드컵 이미지"
            objectFit="cover"
            priority
            fill
            src={renameTo1080Webp(arr[index + 1].workInfo.image_url)}
          />

          {arr[index + 3] && (
            <Image
              fill
              alt="preload 이미지"
              priority
              style={{ display: "none" }}
              src={renameTo1080Webp(arr[index + 3].workInfo.image_url)}
            />
          )}
          <div
            className="absolute bottom-4 left-[50%] flex w-max translate-x-[-50%] items-center gap-4 rounded-lg bg-[rgba(0,0,0,0.8)] px-4 py-2 text-[white] hover:cursor-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="peer hover:scale-105 hover:cursor-pointer [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ccc] hover:[&>svg]:fill-[white]"
              onClick={() => setPlayRightPlayer(!playRightPlayer)}
            >
              {playRightPlayer ? <Pause /> : <PlayArrow />}
            </span>
            <div className=" invisible absolute -top-12 left-1 w-max rounded-md bg-[rgba(0,0,0,0.9)] px-2 py-2 text-sm peer-hover:visible [&>svg]:absolute [&>svg]:left-[3px] [&>svg]:top-4 [&>svg]:h-11 [&>svg]:w-11 [&>svg]:rotate-180 [&>svg]:fill-[rgba(0,0,0,0.9)]">
              <ArrowDropUp />
              {playRightPlayer ? "영상 숨기기" : "영상 재생하기"}
            </div>
            <p className="text-lg text-[#ccc]">{`제 ${
              arr[index + 1].workInfo.episode
            }회 눕프핵`}</p>
            <p className="pb-[2px] text-lg">
              {arr[index + 1].workInfo.minecraft_id}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-32 grid w-full grid-cols-2 gap-4">
        <div>
          {isWindow && (
            <div
              className={`${
                playLeftPlayer ? "block" : "hidden"
              } aspect-video w-full`}
            >
              <ReactPlayer
                playing={playLeftPlayer}
                width="100%"
                height="100%"
                controls
                url={arr[index].workInfo.youtube_url}
              />
            </div>
          )}
        </div>
        <div>
          {isWindow && (
            <div
              className={`${
                playRightPlayer ? "block" : "hidden"
              } aspect-video w-full`}
            >
              <ReactPlayer
                playing={playRightPlayer}
                width="100%"
                height="100%"
                controls
                url={arr[index + 1].workInfo.youtube_url}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
