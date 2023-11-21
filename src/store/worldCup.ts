import { atom } from "recoil";

import { Worldcup } from "@/domains/worldCup";

export const winnerState = atom<Worldcup | null>({
  key: "winnerState",
  default: null,
});
