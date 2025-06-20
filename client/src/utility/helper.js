export const createCv = async (jobDescription) => {
  const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
  try {
    const url = import.meta.env.DEV
      ? "/api/generate"
      : `${baseUrl}/api/generate`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobDescription }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to generate CV");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("createCv error:", error);
    throw error;
  }
};
