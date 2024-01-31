import { ChangeEvent, useEffect } from "react";
import { produce } from "immer";
import { useRecoilState } from "recoil";

import { Tier } from "@/domains/architect";
import { PlacementTest } from "@/domains/placementTest";
import { placementTestState } from "@/store/placementTest";

export const useParticipants = (imagesName: string[]) => {
  const [placementTest, setPlacementTest] = useRecoilState(placementTestState);
  const participants: PlacementTest["participants"] = imagesName.map(
    (imageName) => ({
      minecraft_id: imageName.split("/")[2].split(".")[0],
      image_url: BASE_IMAGE_URL + imageName,
      placement_result: "언랭",
      order: 0,
      ranking: 0,
    }),
  );

  useEffect(() => {
    setPlacementTest(
      produce((draft) => {
        draft.participants = participants;
      }),
    );
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setPlacementTest(
      produce((draft) => {
        draft.participants[index].order = parseInt(e.target.value);
      }),
    );
  };

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    setPlacementTest(
      produce((draft) => {
        draft.participants[index].placement_result = e.target.value as Tier;
      }),
    );
  };

  return { placementTest, handleInputChange, handleSelectChange };
};

const BASE_IMAGE_URL = "https://wakcraft.s3.ap-northeast-2.amazonaws.com/";
