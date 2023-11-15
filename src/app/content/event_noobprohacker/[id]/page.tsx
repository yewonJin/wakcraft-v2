"use client";

import { Fragment } from "react";

import { medium } from "@/app/layout";
import { tempEventNoobProHackerObject2 } from "@/temp";
import Carousel from "@/components/Content/EventNoobProHacker/Carousel";

export default function Page() {
  return (
    <Fragment>
      <div className="mx-auto max-w-[1200px]">
        <h1 className={`text-4xl text-text-primary ${medium.className}`}>
          눕x10 프로x2 해커
        </h1>
        <p className="mt-4 text-text-secondary">
          눕 10명, 프로 2명, 해커 1명이 같은 주제로 작품을 만든다.
        </p>
      </div>
      <Carousel content={tempEventNoobProHackerObject2} />
    </Fragment>
  );
}
