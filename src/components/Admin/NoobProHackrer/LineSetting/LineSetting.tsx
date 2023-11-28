import { Fragment } from "react";

import Line from "./Line";
import LineDetail from "./LineDetail";
import { useLineSetting } from "@/hooks/Admin/NoobProHacker/useLineSetting";

export default function LineSetting() {
  const { lineInfo, handleSubmit } = useLineSetting();

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
      <button onClick={handleSubmit}>추가</button>
    </Fragment>
  );
}
