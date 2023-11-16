import connectMongo from "@/utils/connectMongo";
import MatchYourTier from "@/models/matchYourTier";

export const getAllMatchYourTier = async () => {
  "use server";
  connectMongo();

  const result = await MatchYourTier.findAll();

  return result;
};

export const getMatchYourTier = async (id: number) => {
  "use server";
  connectMongo();

  const result = await MatchYourTier.findByEpisode(id);

  return result;
};
