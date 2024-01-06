import { Fragment } from "react";

import Line from "./LineSetting/Line";
import LineDetail from "./LineSetting/LineDetail";
import { NoobProHacker } from "@/domains/noobprohacker";

type Props = {
  isEdit?: boolean;
  lineInfo: NoobProHacker["lineInfo"];
  handleSubmit: () => void;
};

export default function LineSetting(props: Props) {
  const { isEdit, lineInfo, handleSubmit } = props;

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
      <button
        className="mt-8 rounded-md border-2 border-background-tertiary px-4 py-2 text-text-tertiary"
        onClick={handleSubmit}
      >
        {isEdit ? "수정" : "추가"}
      </button>
    </Fragment>
  );
}
