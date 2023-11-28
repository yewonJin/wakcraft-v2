import { PlacementTest } from "@/domains/placementTest";
import { atom } from "recoil";

export const placementTestState = atom<PlacementTest>({
  key: "placementTestState",
  default: {
    season: 0,
    date: new Date().toISOString().split("T")[0],
    youtube_url: "null",
    participants: [],
  },
});
