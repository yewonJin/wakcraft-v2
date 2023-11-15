import { Tier } from "./architect";

export type MatchYourTier = {
  contentInfo: {
    contentName: string;
    episode: number;
    date: string;
    youtube_url: string;
  };
  participants: {
    order: number;
    expectedTier: Tier;
    currentTier: Tier;
    minecraft_id: string;
    image_url: string;
    youtube_url: string;
    ranking: number;
  }[];
};
