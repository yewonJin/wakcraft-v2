"use client";

import { useState } from "react";

import { ArchitectureContest } from "@/domains/architectureContest";
import CarouselInfo from "@/components/common/Carousel/CarouselInfo";
import CarouselContainer from "@/components/common/Carousel/CarouselContainer";
import CarouselItem from "@/components/common/Carousel/CarouselItem";
import CarouselSlider from "@/components/common/Carousel/CarouselSlider";
import CarouselMobileContainer from "@/components/common/Carousel/CarouselMobileContainer";

type Props = {
  content: ArchitectureContest;
  isMobile: boolean;
};

export default function Carousel(props: Props) {
  const { content, isMobile } = props;

  const [page, setPage] = useState(new Array(7).fill(0));

  const { lineInfo } = content;

  return (
    <main className="mb-24 flex flex-col gap-12 overflow-x-hidden md:gap-24 xl:gap-36">
      {lineInfo.map((item, index) => (
        <section key={item.line}>
          <CarouselInfo subject={item.line} index={index} />
          {isMobile ? (
            <CarouselMobileContainer length={item.line_details.length}>
              {item.line_details.map((line) => (
                <div
                  key={line.minecraft_id}
                  className="relative mt-4 aspect-video min-w-[100%] [&>div>img]:rounded-none"
                >
                  <CarouselItem
                    type="건축 콘테스트"
                    key={line.minecraft_id}
                    minecraft_id={line.minecraft_id}
                    topText={line.topText}
                    bottomText={line.bottomText}
                    image_url={line.image_url}
                    ranking={line.ranking}
                    youtube_url="null"
                  />
                </div>
              ))}
            </CarouselMobileContainer>
          ) : (
            <CarouselContainer page={page} index={index}>
              {item.line_details.map((line) => (
                <CarouselItem
                  type="건축 콘테스트"
                  key={line.minecraft_id}
                  minecraft_id={line.minecraft_id}
                  topText={line.topText}
                  bottomText={line.bottomText}
                  image_url={line.image_url}
                  ranking={line.ranking}
                  youtube_url="null"
                />
              ))}
            </CarouselContainer>
          )}

          <CarouselSlider
            page={page}
            index={index}
            setPage={setPage}
            length={item.line_details.length}
          />
        </section>
      ))}
    </main>
  );
}
