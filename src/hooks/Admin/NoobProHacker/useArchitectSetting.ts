import { useRecoilState } from "recoil";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

import { getAllArchitects } from "@/api/client/architect";
import { Architect } from "@/domains/architect";
import { NoobProHacker } from "@/domains/noobprohacker";
import { lineInfoState } from "@/store/noobprohacker";

type Props = {
  moveToNextPage: () => void;
};

export const useArchitectSetting = (props: Props) => {
  const [lineInfo, setLineInfo] = useRecoilState(lineInfoState);

  const { data: architects } = useQuery<Architect[]>(
    ["getAllArchitects"],
    getAllArchitects,
  );

  const handleSubmit = () => {
    if (!validateInput(lineInfo)) {
      toast.error("비어있는 입력창이 있습니다.");
      return;
    }

    if (!validateDuplicate(lineInfo)) {
      toast.error("아이디가 중복되어 있습니다.");
      return;
    }

    props.moveToNextPage();
  };

  return { architects, setLineInfo, handleSubmit };
};

const validateInput = (lineInfo: NoobProHacker["lineInfo"]) => {
  return lineInfo
    .map((line) =>
      Object.keys(line.line_details).map(
        (tier) =>
          line.line_details[tier as "noob" | "pro" | "hacker"].minecraft_id !==
          "",
      ),
    )
    .flat()
    .every((item) => item);
};

const validateDuplicate = (lineInfo: NoobProHacker["lineInfo"]) => {
  return (
    Array.from(
      new Set(
        lineInfo
          .map((line) =>
            Object.keys(line.line_details).map(
              (tier) =>
                line.line_details[tier as "noob" | "pro" | "hacker"]
                  .minecraft_id,
            ),
          )
          .flat(),
      ),
    ).length === 15
  );
};
