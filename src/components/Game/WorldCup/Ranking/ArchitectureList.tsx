"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { Worldcup, getWinRatio } from "@/domains/worldCup";
import { renameToWebp } from "@/domains/noobprohacker";
import { getWorldCups } from "@/api/client/worldCup";
import LinkIcon from "../../../../../public/icons/link.svg";
import ArrowBack from "../../../../../public/icons/arrow_back.svg";
import Link from "next/link";

export default function ArchitectureList() {
  const [worldCups, setWorldCups] = useState<Worldcup[]>();
  const [page, setPage] = useState(1);

  // TODO: React Query로 immigration하기
  useEffect(() => {
    getWorldCups().then((res: Worldcup[]) =>
      setWorldCups(
        res
          .sort(
            (a, b) =>
              Math.floor((b.numberOfWin / b.numberOfParticipation) * 10000) -
              Math.floor((a.numberOfWin / a.numberOfParticipation) * 10000),
          )
          .filter((item) => item.numberOfParticipation !== 0)
          .concat(res.filter((item) => item.numberOfParticipation === 0)),
      ),
    );
  }, []);

  if (!worldCups)
    return (
      <div className="h-auto w-full">
        {new Array(10).fill(0).map((item, index) => (
          <div
            key={index}
            className="h-[90px] w-full  border-b-[1px] border-background-secondary"
          ></div>
        ))}
      </div>
    );

  return (
    <Fragment>
      <div>
        {worldCups.slice((page - 1) * 10, page * 10).map((worldCup, index) => (
          <div
            key={worldCup.workInfo.subject}
            className="flex h-[90px] items-center gap-10 border-b-[1px] border-background-secondary px-6 text-text-secondary"
          >
            <p className="w-[30px] text-center text-text-primary">
              {index + 1 + (page - 1) * 10}
            </p>
            <div className="relative h-full w-[150px]">
              <Image
                alt="랭킹 이미지"
                src={renameToWebp(worldCup.workInfo.image_url)}
                fill
              />
            </div>
            <div className="flex flex-[2] flex-col gap-[6px]">
              <p className="text-lg text-text-primary">
                {worldCup.workInfo.subject}
              </p>
              <Link href={`/architect/${worldCup.workInfo.minecraft_id}`}>
                <p>{worldCup.workInfo.minecraft_id}</p>
              </Link>
            </div>
            <p className="flex-[2]">{getWinRatio(worldCup)}</p>
            <div className="flex flex-1">
              <span
                className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary [&>svg]:hover:cursor-pointer [&>svg]:hover:fill-text-primary"
                onClick={() => window.open(worldCup.workInfo.youtube_url)}
              >
                <LinkIcon />
              </span>
            </div>
          </div>
        ))}
      </div>
      <ul className="relative mx-auto mt-12 flex w-[370px] justify-center gap-4">
        <span
          className={`${
            page === 1 ? "hidden" : ""
          } absolute left-0 top-2 hover:cursor-pointer [&>svg]:fill-text-tertiary`}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ArrowBack />
        </span>
        {new Array(13)
          .fill(0)
          .map((item, index) => (
            <li
              key={index}
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border-[1px] border-background-secondary px-2 text-text-secondary hover:cursor-pointer hover:bg-background-secondary ${
                page === index + 1 ? "bg-background-secondary" : ""
              }`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </li>
          ))
          .slice(
            Math.floor((page - 1) / 5) * 5,
            Math.floor((page - 1) / 5 + 1) * 5,
          )}
        <span
          className={`absolute right-0 top-2 hover:cursor-pointer [&>svg]:rotate-180 [&>svg]:fill-text-tertiary ${
            page === 13 ? "hidden" : ""
          }`}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ArrowBack />
        </span>
      </ul>
    </Fragment>
  );
}
