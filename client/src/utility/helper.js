export const createCv = async (jobDescription) => {
  try {
    const res = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobDescription }), // ✅ wrap in object
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
