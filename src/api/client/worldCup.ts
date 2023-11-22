export const getWorldCups = async () => {
  const result = await (await fetch(`/api/game/world_cup`)).json();

  return result;
};

export const setWinner = async (subject: string) => {
  const result = await (
    await fetch(`/api/game/world_cup?winner=${subject}`, {
      method: "PATCH",
    })
  ).json();

  return result;
};
