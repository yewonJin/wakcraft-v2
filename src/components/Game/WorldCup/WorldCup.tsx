"use client";

import { medium } from "@/app/layout";
import { useState } from "react";
import InGame from "./InGame";

export default function WorldCup() {
  const [page, setPage] = useState(1);

  if (page === 0) {
    return (
      <div className="mx-auto max-w-[1200px]">
        <h1 className={`text-3xl text-text-primary ${medium.className}`}>
          눕프핵 해커 월드컵
        </h1>
        <select className="mt-8 rounded-md border-none px-2 py-1 outline-none">
          <option>128강</option>
          <option>64강</option>
          <option>32강</option>
          <option>16강</option>
        </select>
        <button className=" ml-5 rounded-md bg-background-secondary px-3 py-2 text-text-primary">
          시작
        </button>
        <button className=" ml-5 rounded-md bg-background-secondary px-3 py-2 text-text-primary">
          랭킹보기
        </button>
        <ul className="mt-12 list-disc text-text-secondary">
          <h3 className="text-xl text-text-primary">유의사항</h3>
          <li className="ml-5 mt-4">
            최근 눕프핵 작품을 우선적으로 진행합니다.
          </li>
          <li className="ml-5 mt-4">
            정확한 데이터를 위해 128강 외에는 투표 결과를 반영하지 않습니다.
          </li>
        </ul>
      </div>
    );
  } else {
    return <InGame />;
  }
}
