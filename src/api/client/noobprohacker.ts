export const getLastestNoobProHacker = async () => {
  const result = await (await fetch(`/api/noobprohacker`)).json();

  return result;
};
