import GuessTime from "@/models/guessTime";
import connectMongo from "@/utils/connectMongo";

export const getAllGuessTimes = async () => {
  "use server";
  connectMongo();

  const result = await GuessTime.findAll();

  return result;
};

export const getGuessTime = async (id: number) => {
  "use server";
  connectMongo();

  const result = await GuessTime.findByEpisode(id);

  return result;
};
