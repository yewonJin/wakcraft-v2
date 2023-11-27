"use client";

import { Fragment } from "react";
import { useQuery } from "react-query";

import { getAllArchitects } from "@/api/client/architect";
import { medium } from "@/app/layout";
import { Architect } from "@/domains/architect";
import SearchArchitect from "./SearchArchitect";

type Props = {
  moveToNextPage: () => void;
};

export default function ArchitectSetting(props: Props) {
  const { moveToNextPage } = props;

  const { data: architects } = useQuery<Architect[]>(
    ["getAllArchitects"],
    getAllArchitects,
  );

  if (!architects) return;

  return (
    <Fragment>
      <h2 className={`${medium.className} mt-16 text-2xl text-text-primary`}>
        건축가 입력
      </h2>
      <div className="mt-10 grid grid-cols-5 gap-8">
        {new Array(5).fill(0).map((_, index) => (
          <div className="" key={index + 1 + "라인"}>
            <h3 className={`${medium.className} text-xl text-text-primary`}>
              {index + 1}라인
            </h3>
            <div className="mt-8 flex flex-col gap-2 text-base text-text-secondary ">
              <h4>눕</h4>
              <SearchArchitect
                index={index}
                tier="noob"
                architects={architects}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2 text-base text-text-secondary [&>input]:h-[40px] [&>input]:w-full">
              <h4>프로</h4>
              <SearchArchitect
                index={index}
                tier="pro"
                architects={architects}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2 text-base text-text-secondary [&>input]:h-[40px] [&>input]:w-full">
              <h4>해커</h4>
              <SearchArchitect
                index={index}
                tier="hacker"
                architects={architects}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 border-2 border-background-tertiary px-4 py-2 text-text-secondary"
        onClick={() => moveToNextPage()}
      >
        제출
      </button>
    </Fragment>
  );
}
