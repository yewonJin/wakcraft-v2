import { ChangeEvent, useMemo } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { produce } from "immer";

import { getImagesName } from "@/api/client/aws";
import { contentInfoState, lineInfoState } from "@/store/noobprohacker";

export const useImageSetting = () => {
  const contentInfo = useRecoilValue(contentInfoState);
  const [lineInfo, setLineInfo] = useRecoilState(lineInfoState);

  const { data: imagesName } = useQuery(["getImagesName"], () =>
    getImagesName("noobProHacker", contentInfo.episode),
  );

  const subjects: string[] = useMemo(
    () =>
      Array.from(
        new Set(
          imagesName?.map((item: any) => item.split("/")[2].split("-")[0]),
        ),
      ),
    [imagesName],
  );

  const BaseURL = `https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode ${contentInfo.episode}/`;

  const handleSelectClick = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    setLineInfo(
      produce((draft) => {
        draft[index].line_details.noob.image_url =
          BaseURL + e.target.value + "-noob.png";
      }),
    );

    setLineInfo(
      produce((draft) => {
        draft[index].line_details.pro.image_url =
          BaseURL + e.target.value + "-pro.png";
      }),
    );

    setLineInfo(
      produce((draft) => {
        draft[index].line_details.hacker.image_url =
          BaseURL + e.target.value + "-hacker.png";
      }),
    );
  };

  return { lineInfo, subjects, handleSelectClick };
};
