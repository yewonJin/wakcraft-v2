import { Fragment } from "react";
import { useRecoilValue } from "recoil";

import { lineInfoState } from "@/store/noobprohacker";
import Line from "./Line";
import LineDetail from "./LineDetail";

export default function LineSetting() {
  const lineInfo = useRecoilValue(lineInfoState);

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
    </Fragment>
  );
}
