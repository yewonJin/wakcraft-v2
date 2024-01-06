import { ChangeEvent, useMemo } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { produce } from "immer";
import toast from "react-hot-toast";

import { getImagesName } from "@/api/client/aws";
import { contentInfoState, lineInfoState } from "@/store/noobprohacker";
import { NoobProHacker } from "@/domains/noobprohacker";

type Props = {
  moveToNextPage: () => void;
};

export const useImageSetting = (props: Props) => {
  const contentInfo = useRecoilValue(contentInfoState);
  const [lineInfo, setLineInfo] = useRecoilState(lineInfoState);

  const { data: imagesName } = useQuery(
    ["getImagesNameWithArchitectureNoobProHacker"],
    () => getImagesName("architectureNoobProHacker", contentInfo.episode),
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

  const BaseURL = `https://wakcraft.s3.ap-northeast-2.amazonaws.com/architectureNoobProHacker/episode ${contentInfo.episode}/`;

  const submitImage = () => {
    if (!validateImage(lineInfo)) {
      toast.error("이미지를 모두 채워주세요");
      return;
    }

    props.moveToNextPage();
  };

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

  return { lineInfo, subjects, handleSelectClick, submitImage };
};

const validateImage = (lineInfo: NoobProHacker["lineInfo"]) => {
  return lineInfo
    .map((line) =>
      Object.keys(line.line_details).map(
        (tier) =>
          line.line_details[tier as "noob" | "pro" | "hacker"].image_url !== "",
      ),
    )
    .flat()
    .every((item) => item);
};
