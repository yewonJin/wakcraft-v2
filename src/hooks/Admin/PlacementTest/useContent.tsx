import { ChangeEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";

import { placementTestState } from "@/store/placementTest";

export const useContent = (curSeason: number) => {
  const [placementTest, setPlacementTest] = useRecoilState(placementTestState);

  useEffect(() => {
    setPlacementTest((prev) => ({
      ...prev,
      season: curSeason + 1,
      date: new Date().toISOString().split("T")[0],
      youtube_url: "null",
    }));
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlacementTest(
      produce((draft) => {
        draft[e.target.name as "date" | "youtube_url"] = e.target.value;
      }),
    );
  };

  return { placementTest, handleInputChange };
};
