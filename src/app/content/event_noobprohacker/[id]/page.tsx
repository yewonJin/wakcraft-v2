"use client";

import { Fragment } from "react";

import { medium } from "@/app/layout";
import { tempEventNoobProHackerObject2 } from "@/temp";
import Carousel from "@/components/EventNoobProHacker/Carousel";

export default function Page() {
  return (
    <Fragment>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl text-text-secondary">제 41회</h2>
        <h1 className={`mt-4 text-4xl text-text-primary ${medium.className}`}>
          눕프로해커 : 자유
        </h1>
      </div>
      <Carousel content={tempEventNoobProHackerObject2} />
    </Fragment>
  );
}
