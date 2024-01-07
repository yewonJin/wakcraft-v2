import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

import { Line, translateLine } from "@/domains/architect";
import { renameTo1080Webp } from "@/domains/noobprohacker";
import PopOverButton from "./PopOverButton";
import PopOver from "./PopOver";

type Props =
  | NoobProHackerProps
  | ArchitectureContestProps
  | EventNoobProHackerProps;

type NoobProHackerProps = {
  type: "눕프로해커";
  minecraft_id: string;
  image_url: string;
  youtube_url: string;
  ranking: number;
  line: string;
};

type ArchitectureContestProps = {
  type: "건축 콘테스트";
  minecraft_id: string;
  image_url: string;
  youtube_url: string;
  ranking: number;
  topText: string;
  bottomText: string;
};

type EventNoobProHackerProps = {
  type: "이벤트 눕프핵";
  minecraft_id: string[];
  image_url: string;
  youtube_url: string;
  ranking: number;
  line: string;
  isOpenPopOver: boolean[][];
  setIsOpenPopOver: Dispatch<SetStateAction<boolean[][]>>;
  index: number;
  detailIndex: number;
};

export default function CarouselItem(props: Props) {
  const { type, minecraft_id, image_url, youtube_url, ranking } = props;

  return (
    <div
      className="group relative aspect-video h-full hover:cursor-pointer [&>img]:rounded-xl"
      onClick={() => {
        if (youtube_url === "null") return;

        window.open(youtube_url);
      }}
    >
      <Image
        sizes="1200px"
        alt="라인 이미지"
        priority
        fill
        src={renameTo1080Webp(image_url)}
      />
      <div className="peer absolute left-0 top-3 flex flex-col gap-1 rounded-2xl hover:cursor-auto md:left-10 md:top-10 md:gap-3">
        <div className="flex items-end pl-3">
          <p
            className="text-xl text-[white] lg:text-2xl"
            style={{ textShadow: "1px 1px 1px #222" }}
          >
            {type === "눕프로해커"
              ? translateLine(props.line as Line)
              : type === "이벤트 눕프핵"
              ? props.line
              : props.topText}
          </p>
          {type === "이벤트 눕프핵" && minecraft_id.length > 1 && (
            <PopOverButton
              isOpenPopOver={props.isOpenPopOver}
              setIsOpenPopOver={props.setIsOpenPopOver}
              detailIndex={props.detailIndex}
              index={props.index}
            />
          )}
          <div className="flex items-center gap-2 md:items-end">
            {type === "건축 콘테스트" && (
              <p
                className=" text-lg text-[white] lg:text-2xl"
                style={{ textShadow: "1px 1px 1px #222" }}
              >
                {props.bottomText}
              </p>
            )}
            <p
              className="ml-3 text-base text-[white] lg:ml-6 xl:text-lg"
              style={{ textShadow: "1px 1px 1px #222" }}
            >
              {ranking}위
            </p>
          </div>
        </div>
        {type === "이벤트 눕프핵" ? (
          <PopOver
            minecraft_id={minecraft_id}
            isOpenPopOver={props.isOpenPopOver}
            index={props.index}
            detailIndex={props.detailIndex}
          />
        ) : (
          <Link href={`/architect/${minecraft_id}`}>
            <p
              className="ml-3 text-[#ccc] hover:cursor-pointer hover:text-[white]"
              style={{ textShadow: "1px 1px 1px #222" }}
              onClick={(e) => e.stopPropagation()}
            >
              {minecraft_id}
            </p>
          </Link>
        )}
      </div>
      {youtube_url !== "null" && (
        <div className="invisible absolute bottom-1 right-1 flex items-center justify-center rounded-md bg-[rgba(0,0,0,0.8)] p-2 px-4 text-sm text-[white] group-hover:visible md:bottom-6 md:right-6 md:text-base">
          클릭하여 유튜브 링크 열기
        </div>
      )}
    </div>
  );
}
