import { ChangeEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { placementTestState } from "@/store/placementTest";
import { addPlacementTest } from "@/api/client/placementTest";
import { PlacementTest } from "@/domains/placementTest";

export const useContent = (curSeason: number) => {
  const [placementTest, setPlacementTest] = useRecoilState(placementTestState);

  const mutation = useMutation(
    ["addPlacementTest"],
    () => addPlacementTest(placementTest),
    {
      onSuccess() {
        toast.success("성공");
      },
    },
  );

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

  const handleSubmit = () => {
    if (!validateOrder(placementTest)) {
      toast.error("순서를 모두 입력해주세요");
      return;
    }

    if (!validateDulipcateOrder(placementTest)) {
      toast.error("중복된 순서가 있습니다.");
      return;
    }

    if (!validatePlacementResult(placementTest)) {
      toast.error("모든 배치 티어를 입력해주세요");
      return;
    }

    mutation.mutate();
  };

  return { placementTest, handleInputChange, handleSubmit };
};

const validateOrder = (placementTest: PlacementTest) => {
  return placementTest.participants.every(
    (participant) => participant.order !== 0,
  );
};

const validatePlacementResult = (placementTest: PlacementTest) => {
  return placementTest.participants.every(
    (participant) => participant.placement_result !== "언랭",
  );
};

const validateDulipcateOrder = (placementTest: PlacementTest) => {
  return (
    Array.from(
      new Set(
        placementTest.participants.map((participant) => participant.order),
      ),
    ).length === placementTest.participants.length
  );
};
