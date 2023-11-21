export const getWorldCups = async () => {
  const result = await (await fetch(`/api/game/world_cup`)).json();

  return result;
};
