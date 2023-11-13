"use client";

import Image from "next/image";

import YoutubeLink from "./YoutubeLink";

type Props = {
  imageUrl: string;
  youtubeUrl?: string;
  architectNumber?: number;
  isUnlimited?: boolean;
};

export default function ImageBox(props: Props) {
  const { imageUrl, youtubeUrl, architectNumber, isUnlimited } = props;

  return (
    <div
      className="group/image relative aspect-video overflow-hidden rounded-xl hover:cursor-pointer"
      style={{ boxShadow: "1px 1px 3px" }}
      onClick={() => window.open(imageUrl)}
    >
      <Image alt="작품 이미지" fill src={imageUrl} sizes="400px" />
      <YoutubeLink youtubeUrl={youtubeUrl} />
      <div className="invisible absolute bottom-2 right-2 bg-[#121212] px-[10px] py-1 text-sm text-[white] group-hover/image:visible peer-hover:invisible">
        클릭하여 원본 이미지 보기
      </div>
      {isUnlimited && (
        <div className="absolute left-[6px] top-[6px] rounded-lg bg-[#121212] px-[10px] py-1 text-sm text-[white] group-hover/image:visible peer-hover:invisible">
          무제한급
        </div>
      )}
      {architectNumber && (
        <div className="absolute left-[6px] top-[6px] rounded-lg bg-[#121212] px-[10px] py-1 text-sm text-[white] group-hover/image:visible peer-hover:invisible">
          {architectNumber + "명 작품"}
        </div>
      )}
    </div>
  );
}
