import { useRecoilState } from "recoil";
import { produce } from "immer";

import { medium } from "@/app/layout";
import Input from "@/components/common/Input/Input";
import { lineInfoState } from "@/store/noobprohacker";

type Props = {
  index: number;
};

export default function Line(props: Props) {
  const { index } = props;
  const [lineInfo, setLineInfo] = useRecoilState(lineInfoState);

  return (
    <div className="flex items-center gap-4">
      <h3 className={`${medium.className} text-2xl text-text-primary`}>
        {index + 1}라인
      </h3>
      <p className="text-lg text-text-secondary">주제</p>
      <div className="[&>input]:h-full [&>input]:w-[120px]">
        <Input
          type="text"
          name="subject"
          value={lineInfo[index].subject}
          handleInputChange={(e) => {
            setLineInfo(
              produce((draft) => {
                draft[index].subject = e.target.value;
              }),
            );
          }}
        />
      </div>
      <p className="text-lg text-text-secondary">라인 순위</p>
      <div className="[&>input]:h-full [&>input]:w-[40px]">
        <Input
          type="number"
          name="line_ranking"
          value={lineInfo[index].line_ranking}
          handleInputChange={(e) =>
            setLineInfo(
              produce((draft) => {
                draft[index].line_ranking = parseInt(e.target.value);
              }),
            )
          }
        />
      </div>
    </div>
  );
}
