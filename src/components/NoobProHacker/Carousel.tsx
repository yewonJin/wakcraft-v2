"use client";

import { useState } from "react";

import { NoobProHacker } from "@/domains/noobprohacker";
import CarouselInfo from "../common/Carousel/CarouselInfo";
import CarouselContainer from "../common/Carousel/CarouselContainer";
import CarouselSlider from "../common/Carousel/CarouselSlider";
import CarouselItem from "../common/Carousel/CarouselItem";
import { Line } from "@/domains/architect";

type Props = {
  noobprohacker: NoobProHacker;
};

export default function Carousel(props: Props) {
  const { noobprohacker } = props;
  const [page, setPage] = useState<number[]>(
    new Array(noobprohacker.lineInfo.length).fill(0),
  );

  const { lineInfo } = noobprohacker;

  return (
    <main className="mb-24 flex flex-col gap-12 md:gap-24 xl:gap-36">
      {lineInfo.map((item, index) => (
        <section key={item.subject}>
          <CarouselInfo
            subject={item.subject}
            line_ranking={item.line_ranking}
            index={index}
          />
          <CarouselContainer page={page} index={index}>
            {Object.keys(item.line_details).map((line) => {
              return (
                <CarouselItem
                  type="눕프로해커"
                  key={item.line_details[line as Line].minecraft_id}
                  image_url={item.line_details[line as Line].image_url}
                  youtube_url={item.line_details[line as Line].youtube_url}
                  minecraft_id={item.line_details[line as Line].minecraft_id}
                  ranking={item.line_details[line as Line].ranking}
                  line={line as Line}
                />
              );
            })}
          </CarouselContainer>
          <CarouselSlider
            page={page}
            index={index}
            setPage={setPage}
            length={3}
          />
        </section>
      ))}
    </main>
  );
}
