const { Groq } = require("groq-sdk");

// Validate environment variable
if (!process.env.GROQ_API_KEY) {
  throw new Error("Missing GROQ_API_KEY environment variable");
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Configurable model
const MODEL_NAME = process.env.GROQ_MODEL || "llama3-8b-8192";

const alpha = async ({ context = "", jobDescription = "" }) => {
  const prompt2 = `Based on the following job description, generate a tailored CV as clean HTML. Return only the HTML — no markdown, no explanations.

Job Description:
${jobDescription}

CV Context:
${context}
`;
  const prompt = `Rewrite the CV using this data: ${context}, tailored exactly to this job description: ${jobDescription}. Return only the final CV content. No introductions, no explanations, no extra text.`;

  try {
    const response = await groq.chat.completions.create({
      model: MODEL_NAME,
      messages: [
        { role: "system", content: "You are an expert resume optimizer." },
        { role: "user", content: prompt2 },
      ],
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    return response.choices[0]?.message?.content || "";
  } catch (err) {
    console.error("Groq API Error:", err.response?.data || err);
    throw new Error(`callGroqAPI failed: ${err.message}`);
  }
};

module.exports = alpha;
