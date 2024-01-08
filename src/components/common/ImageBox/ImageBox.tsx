"use client";

import Image from "next/image";

import YoutubeLink from "./YoutubeLink";
import { renameTo1080Webp, renameToWebp } from "@/domains/noobprohacker";
import LeftBottom from "./LeftBottom";
import LeftTop from "./LeftTop";

type Props = {
  imageUrl: string;
  youtubeUrl?: string;
  architectNumber?: number;
  isUnlimited?: boolean;
  minecraft_id?: string;
};

export default function ImageBox(props: Props) {
  const { imageUrl, youtubeUrl, architectNumber, isUnlimited, minecraft_id } =
    props;

  return (
    <div
      className="group/image relative aspect-video overflow-hidden rounded-xl hover:cursor-pointer"
      style={{ boxShadow: "1px 1px 3px" }}
      onClick={() => window.open(renameTo1080Webp(imageUrl))}
    >
      <Image
        alt="작품 이미지"
        fill
        src={renameToWebp(imageUrl)}
        sizes="400px"
      />
      <YoutubeLink youtubeUrl={youtubeUrl} />
      <LeftTop isUnlimited={isUnlimited} architectNumber={architectNumber} />
      <LeftBottom minecraft_id={minecraft_id} />
      <div className="invisible absolute bottom-2 right-2 bg-[#121212] px-[10px] py-1 text-sm text-[white] group-hover/image:visible peer-hover:invisible">
        클릭하여 원본 이미지 보기
      </div>
    </div>
  );
}
