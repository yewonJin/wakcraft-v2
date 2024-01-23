"use client";

import { useState } from "react";

import { EventNoobProHacker } from "@/domains/eventNoobProHacker";
import CarouselInfo from "@/components/common/Carousel/CarouselInfo";
import CarouselContainer from "@/components/common/Carousel/CarouselContainer";
import CarouselItem from "@/components/common/Carousel/CarouselItem";
import CarouselSlider from "@/components/common/Carousel/CarouselSlider";
import CarouselMobileContainer from "@/components/common/Carousel/CarouselMobileContainer";

type Props = {
  content: EventNoobProHacker;
  isMobile: boolean;
};

export default function Carousel(props: Props) {
  const { content, isMobile } = props;
  const [page, setPage] = useState(new Array(content.lineInfo.length).fill(0));
  const [isOpenPopOver, setIsOpenPopOver] = useState<boolean[][]>(
    Array.from(Array(content.lineInfo.length), () =>
      Array(content.lineInfo[0].line_details.length).fill(false),
    ),
  );

  return (
    <main className="mb-24 flex flex-col gap-12 overflow-x-hidden md:gap-24 xl:gap-36">
      {content.lineInfo.map((item, index) => (
        <section key={item.subject}>
          <CarouselInfo
            subject={item.subject}
            line_ranking={item.line_ranking}
            index={index}
          />
          {isMobile ? (
            <CarouselMobileContainer length={item.line_details.length}>
              {item.line_details.map((line, detailIndex) => (
                <div
                  key={line.image_url}
                  className="relative mt-4 aspect-video min-w-[100%] [&>div>img]:rounded-none"
                >
                  <CarouselItem
                    type="이벤트 눕프핵"
                    minecraft_id={line.minecraft_id}
                    image_url={line.image_url}
                    youtube_url={line.youtube_url}
                    ranking={line.ranking}
                    line={line.line}
                    isOpenPopOver={isOpenPopOver}
                    setIsOpenPopOver={setIsOpenPopOver}
                    index={index}
                    detailIndex={detailIndex}
                  />
                </div>
              ))}
            </CarouselMobileContainer>
          ) : (
            <CarouselContainer page={page} index={index}>
              {item.line_details.map((line, detailIndex) => (
                <CarouselItem
                  type="이벤트 눕프핵"
                  key={line.image_url}
                  minecraft_id={line.minecraft_id}
                  image_url={line.image_url}
                  youtube_url={line.youtube_url}
                  ranking={line.ranking}
                  line={line.line}
                  isOpenPopOver={isOpenPopOver}
                  setIsOpenPopOver={setIsOpenPopOver}
                  index={index}
                  detailIndex={detailIndex}
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
