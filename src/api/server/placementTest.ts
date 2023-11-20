import connectMongo from "@/utils/connectMongo";
import PlacementTest from "@/models/placementTest";

export const getAllPlacementTest = async () => {
  "use server";
  connectMongo();

  const result = await PlacementTest.findAll();

  return result;
};

export const getPlacementTest = async (id: number) => {
  "use server";
  connectMongo();

  const result = await PlacementTest.findBySeason(id);

  return result;
};
