import { atom } from "recoil";

import { NoobProHacker, lineInfoObject } from "@/domains/noobprohacker";

export const contentInfoState = atom<NoobProHacker["contentInfo"]>({
  key: "contentInfoState",
  default: {
    episode: 0,
    main_subject: "자유",
    date: new Date().toISOString().split("T")[0],
    youtube_url: "null",
  },
});

export const lineInfoState = atom<NoobProHacker["lineInfo"]>({
  key: "lineInfoState",
  default: new Array(5).fill(lineInfoObject),
});
