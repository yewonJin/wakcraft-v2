import { useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { contentInfoState, lineInfoState } from "@/store/noobprohacker";
import {
  addArchitectureNoobProHacker,
  editArchitectureNoobProHacker,
} from "@/api/client/architectureNoobProHacker";
import { ArchitectureNoobProHacker } from "@/domains/architectureNoobProHacker";

type Props = {
  isEdit?: boolean;
};

export const useLineSetting = (props: Props) => {
  const lineInfo = useRecoilValue(lineInfoState);
  const contentInfo = useRecoilValue(contentInfoState);

  const addMutation = useMutation(
    ["addArchitectureNoobProHacker"],
    () => addArchitectureNoobProHacker({ contentInfo, lineInfo }),
    {
      onSuccess() {
        toast.success("추가 성공");
      },
    },
  );

  const editMutation = useMutation(
    ["editArchitectureNoobProHacker"],
    () => editArchitectureNoobProHacker({ contentInfo, lineInfo }),
    {
      onSuccess() {
        toast.success("수정 성공");
      },
    },
  );

  const handleSubmit = () => {
    if (!validateSubject(lineInfo)) {
      toast.error("주제를 모두 입력해주세요");
      return;
    }

    if (!validateLineRanking(lineInfo)) {
      toast.error("라인 랭킹을 모두 입력해주세요");
    }

    if (!validateRanking(lineInfo)) {
      toast.error("랭킹 값을 모두 입력해주세요");
      return;
    }

    props.isEdit ? editMutation.mutate() : addMutation.mutate();
  };

  return { lineInfo, handleSubmit };
};

const validateSubject = (lineInfo: ArchitectureNoobProHacker["lineInfo"]) => {
  return lineInfo
    .map((line) => line.subject !== "")
    .flat()
    .every((item) => item);
};

const validateLineRanking = (
  lineInfo: ArchitectureNoobProHacker["lineInfo"],
) => {
  return lineInfo
    .map((line) => line.line_ranking !== 0)
    .flat()
    .every((item) => item);
};

const validateRanking = (lineInfo: ArchitectureNoobProHacker["lineInfo"]) => {
  return lineInfo
    .map(
      (line) =>
        line.line_details.pro.ranking !== 0 &&
        line.line_details.hacker.ranking !== 0,
    )
    .flat()
    .every((item) => item);
};
