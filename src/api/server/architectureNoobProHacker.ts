import ArchitectureNoobProHacker from "@/models/architectureNoobProHacker";
import connectMongo from "@/utils/connectMongo";
import { revalidatePath } from "next/cache";

export const getAllArchitectureNoobProHackers = async () => {
  "use server";
  connectMongo();

  const result = await ArchitectureNoobProHacker.findAll();

  return result;
};

export const getAllArchitectureNoobprohackersWithSweepLine = async () => {
  "use server";
  connectMongo();

  const result = await ArchitectureNoobProHacker.findAllWithSweepLine();

  return result;
};

export const getArchitectureNoobProHacker = async (episode: number) => {
  "use server";
  connectMongo();

  const result = await ArchitectureNoobProHacker.findByEpisode(episode);

  return result;
};

export const revalidateArchitectureNoobProHackers = async () => {
  "use server";

  revalidatePath("/architecture_noobprohacker", "page");
};
