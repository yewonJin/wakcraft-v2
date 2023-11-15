import Architect from "@/models/architect";
import connectMongo from "@/utils/connectMongo";

export const getAllArchitects = async () => {
  "use server";
  connectMongo();

  const result = await Architect.findAll();

  return result;
};
