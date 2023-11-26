import { Tier } from "@/domains/architect";

export const getAllArchitects = async () => {
  const result = await (await fetch(`/api/architect`)).json();

  return result;
};

export const getArchitectByMinecraftId = async (id: string) => {
  const result = await (await fetch(`/api/architect?minecraftId=${id}`)).json();

  return result;
};

export type ArchitectInfo = {
  beforeId: string;
  afterId: string;
  wakzoo_id: string;
  curTier: Tier;
};

export const updateArchitect = async (body: ArchitectInfo) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const response = await fetch(`/api/architect`, {
    method: "PATCH",
    body: JSON.stringify(body),
    credentials: "include",
    headers: myHeaders,
  });

  if (!response.ok) {
    const { serviceCode } = await response.json();

    throw serviceCode;
  }

  return await response.json();
};
