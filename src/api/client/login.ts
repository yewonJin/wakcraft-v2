export const login = async (id: string, password: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = { id, password };

  try {
    return await fetch(`/api/auth`, {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: myHeaders,
    });
  } catch (error) {
    throw error;
  }
};
