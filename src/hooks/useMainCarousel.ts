import { useEffect, useRef, useState } from "react";

import { NoobProHacker, getLineWinner } from "@/domains/noobprohacker";

const useMainCarousel = (lines: NoobProHacker["lineInfo"]) => {
  const [curCategory, setCurCategory] = useState(getLineWinner(lines));
  const intervalRef = useRef<any>(null);

  const autoScroll = () => {
    setCurCategory((prev) => {
      if (prev === 4) {
        return 0;
      }
      return prev + 1;
    });
  };

  const initInterval = () => {
    if (window.innerWidth < 800) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startInterval = () => {
    if (window.innerWidth < 800) return;

    intervalRef.current = setInterval(autoScroll, 4000);
  };

  useEffect(() => {
    startInterval();
  }, []);

  const handleCategoryClick = (index: number) => {
    setCurCategory(index);
    initInterval();
    startInterval();
  };

  return { curCategory, handleCategoryClick, initInterval, startInterval };
};

export default useMainCarousel;
