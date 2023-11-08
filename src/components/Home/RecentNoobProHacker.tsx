import { medium } from "@/app/layout";

import Title from "./Title";
import Line from "./Line";

import { tempNoobProHackerObject } from "@/temp";

export default function RecentNoobProHacker() {
  const { contentInfo, lineInfo } = tempNoobProHackerObject;

  return (
    <div
      className={
        medium.className +
        " z-10 mx-auto flex h-[100vh] w-full max-w-[1200px] flex-col justify-center px-4 font-medium xl:px-0"
      }
    >
      <Title episode={contentInfo.episode} subject={contentInfo.main_subject} />
      <Line lines={lineInfo} />
    </div>
  );
}
