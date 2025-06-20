const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

export const getUsers = async () => {
  try {
    const url = `${baseUrl}/api/users`;
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data);
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
