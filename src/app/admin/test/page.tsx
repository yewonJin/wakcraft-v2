"use client";

import CarouselItem from "@/components/common/Carousel/CarouselItem";
import { useSlider } from "@/hooks/useSlider";

export default function Page() {
  const { scrollX, isOnScroll, ref, onTouchStart, onTouchMove, onTouchEnd } =
    useSlider(3);

  return (
    <div className="mx-auto max-w-[1200px] overflow-x-hidden pt-60">
      <div
        className="flex w-full"
        ref={ref}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          transform: `translateX(${scrollX}px)`,
          transitionDuration: isOnScroll ? "0ms" : "400ms",
        }}
      >
        <div className="relative aspect-video min-w-[100%]">
          <CarouselItem
            type="눕프로해커"
            key={"ongmungcha3542"}
            image_url={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2043/Betta-noob.png"
            }
            youtube_url={"null"}
            minecraft_id={"ongmungcha3542"}
            ranking={0}
            line={"noob"}
          />
        </div>
        <div className="relative aspect-video min-w-[100%]">
          <CarouselItem
            type="눕프로해커"
            key={"cupdog"}
            image_url={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2043/Betta-pro.png"
            }
            youtube_url={"null"}
            minecraft_id={"cupdog"}
            ranking={2}
            line={"pro"}
          />
        </div>
        <div className="relative aspect-video min-w-[100%]">
          <CarouselItem
            type="눕프로해커"
            key={"SungYuC"}
            image_url={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2043/Betta-hacker.png"
            }
            youtube_url={"null"}
            minecraft_id={"SungYuC"}
            ranking={1}
            line={"hacker"}
          />
        </div>
      </div>
    </div>
  );
}
