import connectMongo from "@/utils/connectMongo";
import EventNoobProHacker from "@/models/eventNoobProHacker";

export const getAllEventNoobProHacker = async () => {
  "use server";
  connectMongo();

  const result = await EventNoobProHacker.findAll();

  return result;
};

export const getEventNoobProHacker = async (id: number) => {
  "use server";
  connectMongo();

  const result = await EventNoobProHacker.findByEpisode(id);

  return result;
};
