import connectMongo from "@/utils/connectMongo";
import ArchitectureContest from "@/models/architectureContest";

export const getAllArchitectureContest = async () => {
  "use server";
  connectMongo();

  const result = await ArchitectureContest.findAll();

  return result;
};

export const getArchitectureContest = async (id: number) => {
  "use server";
  connectMongo();

  const result = await ArchitectureContest.findByEpisode(id);

  return result;
};
