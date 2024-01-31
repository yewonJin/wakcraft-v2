import { Tier } from "./architect";

export type PlacementTest = {
  season: number;
  date: string;
  youtube_url: string;
  participants: {
    minecraft_id: string;
    image_url: string;
    order: number;
    placement_result: Tier;
    ranking: number;
  }[];
};
