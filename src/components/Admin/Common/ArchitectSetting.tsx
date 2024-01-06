"use client";

import { Fragment } from "react";

import { medium } from "@/app/layout";
import SearchArchitect from "./SearchArchitect";
import { useArchitectSetting } from "@/hooks/Admin/NoobProHacker/useArchitectSetting";

type Props = {
  moveToNextPage: () => void;
};

export default function ArchitectSetting(props: Props) {
  const { architects, setLineInfo, handleSubmit } = useArchitectSetting(props);

  if (!architects) return;

  return (
    <Fragment>
      <div className="mt-16 grid grid-cols-5 gap-8">
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
                setLineInfo={setLineInfo}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2 text-base text-text-secondary [&>input]:h-[40px] [&>input]:w-full">
              <h4>프로</h4>
              <SearchArchitect
                index={index}
                tier="pro"
                architects={architects}
                setLineInfo={setLineInfo}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2 text-base text-text-secondary [&>input]:h-[40px] [&>input]:w-full">
              <h4>해커</h4>
              <SearchArchitect
                index={index}
                tier="hacker"
                architects={architects}
                setLineInfo={setLineInfo}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 border-2 border-background-tertiary px-4 py-2 text-text-secondary"
        onClick={handleSubmit}
      >
        제출
      </button>
    </Fragment>
  );
}
