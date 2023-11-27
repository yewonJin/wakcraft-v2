import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { contentInfoState, lineInfoState } from "@/store/noobprohacker";
import Line from "./Line";
import LineDetail from "./LineDetail";
import { addNoobProHacker } from "@/api/client/noobprohacker";

export default function LineSetting() {
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

  return (
    <Fragment>
      <div className="mt-12 flex flex-col gap-16">
        {lineInfo.map((line, index) => (
          <div key={index}>
            <Line index={index} />
            <div className="mt-6 grid grid-cols-3 gap-8">
              <LineDetail tier="noob" index={index} />
              <LineDetail tier="pro" index={index} />
              <LineDetail tier="hacker" index={index} />
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => mutation.mutate()}>추가</button>
    </Fragment>
  );
}
