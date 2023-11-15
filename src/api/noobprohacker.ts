import NoobProHacker from "@/models/noobprohacker";
import connectMongo from "@/utils/connectMongo";

export const getAllNoobProHacker = async () => {
  "use server";
  connectMongo();

  const result = await NoobProHacker.findAll();

  return result;
};
