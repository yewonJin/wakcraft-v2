import { useRecoilState } from "recoil";
import { produce } from "immer";

import { medium } from "@/app/layout";
import { lineInfoState } from "@/store/noobprohacker";
import FormField from "@/components/common/Form/FormField";
import Input from "@/components/common/Input/Input";

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
      <FormField label="주제">
        <Input
          name="subject"
          type="text"
          value={lineInfo[index].subject}
          width="120px"
          handleInputChange={(e) => {
            setLineInfo(
              produce((draft) => {
                draft[index].subject = e.target.value;
              }),
            );
          }}
        />
      </FormField>
      <FormField label="라인 순위">
        <Input
          name="line_ranking"
          type="number"
          value={lineInfo[index].line_ranking}
          width="40px"
          handleInputChange={(e) =>
            setLineInfo(
              produce((draft) => {
                draft[index].line_ranking = parseInt(e.target.value);
              }),
            )
          }
        />
      </FormField>
    </div>
  );
}
