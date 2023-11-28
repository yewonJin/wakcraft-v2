export const getCurSeason = async () => {
  const result = await (
    await fetch(`/api/placement_test?curSeason=true`)
  ).json();

  return result;
};
