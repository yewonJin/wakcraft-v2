import { useEffect, useRef, useState } from "react";

import { NoobProHacker, getLineWinner } from "@/domains/noobprohacker";

const useLineScroll = (lines: NoobProHacker["lineInfo"]) => {
  const [curLine, setCurLine] = useState(getLineWinner(lines));
  const intervalRef = useRef<any>(null);

  const autoScroll = () => {
    setCurLine((prev) => {
      if (prev === 4) {
        return 0;
      }
      return prev + 1;
    });
  };

  const initInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startInterval = () => {
    intervalRef.current = setInterval(autoScroll, 4000);
  };

  useEffect(() => {
    startInterval();
  }, []);

  const handleLineClick = (index: number) => {
    setCurLine(index);
    initInterval();
    startInterval();
  };

  return { curLine, handleLineClick, initInterval, startInterval };
};

export default useLineScroll;
