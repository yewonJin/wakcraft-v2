"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [prevX, setPrevX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);

  const [scrollX, setScrollX] = useState(0);

  const [isOnScroll, setIsOnScroll] = useState(false);
  const [isLongScroll, setIsLongScroll] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

  const length = 4;

  // 윈도우 창 사이즈 조절 시 boxWidth 재설정
  useEffect(() => {
    const onResize = () => {
      if (!ref.current) return;

      setBoxWidth(ref.current.clientWidth);
    };

    onResize();

    window.addEventListener("resize", onResize);
  }, []);

  const initLongScrollTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const startLongScrollTimer = () => {
    timerRef.current = setTimeout(() => {
      setIsLongScroll(true);
    }, 500);
  };

  return (
    <div className="mx-auto max-w-[1200px] overflow-x-hidden pt-60">
      <div
        className="flex w-full"
        ref={ref}
        onTouchStart={(e) => {
          setStartX(Math.floor(e.changedTouches[0].pageX));
          setPrevX(-scrollX + Math.floor(e.changedTouches[0].pageX));

          setIsOnScroll(true);
          startLongScrollTimer();
        }}
        onTouchMove={(e) => {
          const curPosX = Math.floor(e.changedTouches[0].pageX);

          if (curPosX - prevX >= 0) return;

          if (curPosX - prevX <= -boxWidth * (length - 1)) return;

          setScrollX(curPosX - prevX);
        }}
        onTouchEnd={(e) => {
          setIsOnScroll(false);
          initLongScrollTimer();

          // 꾹 눌렀을 때
          if (isLongScroll) {
            setScrollX(
              -boxWidth * (Math.ceil((scrollX - boxWidth / 2) / -boxWidth) - 1),
            );
            setIsLongScroll(false);
            return;
          }

          // 짧게 눌렀을 때
          const curPosX = Math.floor(e.changedTouches[0].pageX);

          if (curPosX - startX < -10) {
            if (Math.ceil(scrollX / -boxWidth) >= length) return;
            setScrollX(-boxWidth * Math.ceil(scrollX / -boxWidth));
          }

          if (curPosX - startX > -10) {
            if (Math.ceil(scrollX / -boxWidth) <= 0) return;
            setScrollX(-boxWidth * (Math.ceil(scrollX / -boxWidth) - 1));
          }
        }}
        style={{
          transform: `translateX(${scrollX}px)`,
          transitionDuration: isOnScroll ? "0ms" : "400ms",
        }}
      >
        <div className="relative aspect-video min-w-[100%] bg-[#333]">
          <Image
            alt="눕"
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/architectureNoobProHacker/episode%202/Petra-noob.1080p.webp"
            }
            fill
          />
        </div>
        <div className="relative aspect-video min-w-[100%] bg-[#666]">
          <Image
            alt="프로"
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/architectureNoobProHacker/episode%202/Petra-pro.1080p.webp"
            }
            fill
          />
        </div>
        <div className="relative aspect-video min-w-[100%] bg-[#999]">
          <Image
            alt="해커"
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/architectureNoobProHacker/episode%202/Petra-hacker.1080p.webp"
            }
            fill
          />
        </div>
        <div className="relative aspect-video min-w-[100%] bg-[#999]">
          <Image
            alt="갓"
            src={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2043/Betta-hacker.1080p.webp"
            }
            fill
          />
        </div>
      </div>
    </div>
  );
}
