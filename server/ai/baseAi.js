const { Groq } = require("groq-sdk");

// Fail-fast if API key is missing
if (!process.env.GROQ_API_KEY) {
  throw new Error("Missing GROQ_API_KEY environment variable");
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL_NAME = process.env.GROQ_MODEL?.trim() || "llama3-8b-8192";

const alpha = async () => {
  const prompt = "Tell me a joke.";

  try {
    const response = await groq.chat.completions.create({
      model: MODEL_NAME,
      messages: [
        { role: "system", content: "You are a witty assistant." },
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
      stream: false,
    });

    const message = response.choices?.[0]?.message?.content;
    return message || "No response received.";
  } catch (err) {
    console.error("Groq API Error:", err.response?.data || err);
    throw new Error(`Groq API call failed: ${err.message}`);
  }
};

module.exports = alpha;