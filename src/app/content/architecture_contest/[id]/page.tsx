"use client";

import { Fragment } from "react";

import { medium } from "@/app/layout";
import { tempArchitectureContestObject } from "@/temp";
import Carousel from "@/components/ArchitectureContest/Carousel";

export default function Page() {
  return (
    <Fragment>
      <div className="mx-auto max-w-[1200px]">
        <h1 className={`text-4xl text-text-primary ${medium.className}`}>
          돌아온 치즐 건콘
        </h1>
        <p className="mt-4 text-text-secondary">
          라인당 7명이 주제에 맞는 작품을 건축한다.
        </p>
      </div>
      <Carousel content={tempArchitectureContestObject} />
    </Fragment>
  );
}
