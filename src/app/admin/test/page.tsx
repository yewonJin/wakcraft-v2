"use client";

import { TouchEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [boxWidth, setBoxWidth] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [page, setPage] = useState(0);
  const [isLongScroll, setIsLongScroll] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

  const initTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setIsLongScroll(true);
    }, 500);
  };

  useEffect(() => {
    const setWidth = () => {
      if (!ref.current) return;

      setBoxWidth(ref.current.clientWidth);
    };

    setWidth();

    window.addEventListener("resize", setWidth);

    return window.removeEventListener("resize", setWidth);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    console.log("page: " + page);

    ref.current.scrollBy({
      left: boxWidth * page - ref.current.scrollLeft,
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    setPrevScrollLeft(ref.current.scrollLeft);

    startTimer();
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    initTimer();

    console.log("isLongScroll: " + isLongScroll);

    if (isLongScroll) {
      if (ref.current.scrollLeft - prevScrollLeft > Math.floor(boxWidth / 2)) {
        setPage((prev) => {
          if (prev === 2) return prev;

          return prev + 1;
        });
      } else {
        if (page === 0) {
          ref.current.scrollBy({
            left: boxWidth * page - ref.current.scrollLeft,
            top: 0,
            behavior: "smooth",
          });
        }

        setPage((prev) => {
          if (prev === 0) return prev;

          return prev - 1;
        });
      }
    } else {
      if (ref.current.scrollLeft - prevScrollLeft > 3) {
        setPage((prev) => {
          if (!ref.current) return prev;

          if (prev === 2) return prev;

          return (
            prev +
            Math.floor((ref.current.scrollLeft - prevScrollLeft) / boxWidth) +
            1
          );
        });
      }

      if (ref.current.scrollLeft - prevScrollLeft < -3) {
        setPage((prev) => {
          if (!ref.current) return prev;

          if (prev === 0) return prev;

          return (
            prev +
            Math.floor((ref.current.scrollLeft - prevScrollLeft) / boxWidth)
          );
        });
      }
    }

    setIsLongScroll(false);
  };

  return (
    <div className="mx-auto max-w-[1200px] overflow-x-hidden pt-60">
      <div
        className={`category-scrollbar flex w-full overflow-x-scroll`}
        ref={ref}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-video min-w-[100%] bg-[#333]">
          <Image
            alt="눕 이미지"
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/architectureNoobProHacker/episode%202/Petra-noob.1080p.webp"
            }
            fill
          />
        </div>
        <div className="relative aspect-video min-w-[100%] bg-[#666]">
          <Image
            alt="프로 이미지"
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/architectureNoobProHacker/episode%202/Petra-pro.1080p.webp"
            }
            fill
          />
        </div>
        <div className="relative aspect-video min-w-[100%] bg-[#999]">
          <Image
            alt="프로 이미지"
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/architectureNoobProHacker/episode%202/Petra-hacker.1080p.webp"
            }
            fill
          />
        </div>
      </div>
    </div>
  );
}
