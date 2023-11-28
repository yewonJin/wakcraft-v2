import { addNoobProHacker } from "@/api/client/noobprohacker";
import { NoobProHacker } from "@/domains/noobprohacker";
import { contentInfoState, lineInfoState } from "@/store/noobprohacker";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";

export const useLineSetting = () => {
  const lineInfo = useRecoilValue(lineInfoState);
  const contentInfo = useRecoilValue(contentInfoState);

  const mutation = useMutation(
    ["addNoobProHacker"],
    () => addNoobProHacker({ contentInfo, lineInfo }),
    {
      onSuccess() {
        toast.success("추가 성공");
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

    mutation.mutate();
  };

  return { lineInfo, handleSubmit };
};

const validateSubject = (lineInfo: NoobProHacker["lineInfo"]) => {
  return lineInfo
    .map((line) => line.subject !== "")
    .flat()
    .every((item) => item);
};

const validateLineRanking = (lineInfo: NoobProHacker["lineInfo"]) => {
  return lineInfo
    .map((line) => line.line_ranking !== 0)
    .flat()
    .every((item) => item);
};

const validateRanking = (lineInfo: NoobProHacker["lineInfo"]) => {
  return lineInfo
    .map(
      (line) =>
        line.line_details.pro.ranking !== 0 &&
        line.line_details.hacker.ranking !== 0,
    )
    .flat()
    .every((item) => item);
};
