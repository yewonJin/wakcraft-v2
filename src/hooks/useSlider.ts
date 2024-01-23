import { TouchEvent, useEffect, useRef, useState } from "react";

export const useSlider = (length: number) => {
  const [prevX, setPrevX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const [isOnScroll, setIsOnScroll] = useState(false);
  const [isLongScroll, setIsLongScroll] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

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

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setStartX(Math.floor(e.changedTouches[0].pageX));
    setPrevX(-scrollX + Math.floor(e.changedTouches[0].pageX));

    setIsOnScroll(true);
    startLongScrollTimer();
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const curPosX = Math.floor(e.changedTouches[0].pageX);

    if (curPosX - prevX >= 0) return;

    if (curPosX - prevX <= -boxWidth * (length - 1)) return;

    setScrollX(curPosX - prevX);
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
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

    if (curPosX - startX === 0) {
      return;
    }

    if (curPosX - startX < -10) {
      if (Math.ceil(scrollX / -boxWidth) >= length) return;
      setScrollX(-boxWidth * Math.ceil(scrollX / -boxWidth));
    }

    if (curPosX - startX > -10) {
      if (Math.ceil(scrollX / -boxWidth) <= 0) return;
      setScrollX(-boxWidth * (Math.ceil(scrollX / -boxWidth) - 1));
    }
  };

  return { scrollX, isOnScroll, ref, onTouchStart, onTouchMove, onTouchEnd };
};
