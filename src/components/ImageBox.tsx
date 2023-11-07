"use client";

import { Suspense } from "react";
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
    <div className="group/image relative aspect-video w-full overflow-hidden rounded-xl bg-backround-tertiary text-left hover:cursor-pointer">
      <Image alt="작품 이미지" fill src={imageUrl} />
      <Suspense fallback={<div>loading</div>}>
        <YoutubeLink youtubeUrl={youtubeUrl} />
      </Suspense>
      <div className="invisible absolute bottom-2 right-2 bg-[#222] px-[10px] py-1 text-sm text-text-primary group-hover/image:visible peer-hover:invisible">
        클릭하여 원본 이미지 보기
      </div>
      {isUnlimited && (
        <div className="absolute left-[6px] top-[6px] rounded-lg bg-[#222] px-[10px] py-1 text-sm text-text-primary group-hover/image:visible peer-hover:invisible">
          무제한급
        </div>
      )}
      {architectNumber && (
        <div className="absolute left-[6px] top-[6px] rounded-lg bg-[#222] px-[10px] py-1 text-sm text-text-primary group-hover/image:visible peer-hover:invisible">
          {architectNumber + "명 작품"}
        </div>
      )}
    </div>
  );
}
