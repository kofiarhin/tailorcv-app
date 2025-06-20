const { Groq } = require("groq-sdk");

// Validate environment variable
if (!process.env.GROQ_API_KEY) {
  throw new Error("Missing GROQ_API_KEY environment variable");
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL_NAME = process.env.GROQ_MODEL?.trim() || "llama3-8b-8192";

const alpha = async ({ context = "", jobDescription = "" }) => {
  const prompt = `Use the CV context below to generate a customized, professional CV tailored specifically to the job description. Return only valid, semantic, well-spaced HTML. Wrap the entire output in a single <div id="cv"> container. Use clear HTML sectioning: headings (<h2>) for sections like Experience, Skills, and Education, and paragraphs or lists for details. Use this order: Name, Summary, Experience, Skills, Education, Certifications, Contact. Ensure the output uses only standard HTML5 tags, except for links. All links must be wrapped in a custom <nacho-r> tag instead of <a>. Do not include any CSS, inline styles, class attributes, or fancy layouts. Keep the structure simple and minimal. Do not invent or modify any information not provided in the context. Avoid empty tags or placeholder content. Do not repeat section headers or job titles unnecessarily. Wrap the final HTML in <!-- CV_START --> and <!-- CV_END --> comments. No markdown. No extra text. No explanations.

Job Description:
${jobDescription}

CV Context:
${context}`;

  try {
    const response = await groq.chat.completions.create({
      model: MODEL_NAME,
      messages: [
        { role: "system", content: "You are an expert resume optimizer." },
        { role: "user", content: prompt },
      ],
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      stream: false,
    });

    return response.choices?.[0]?.message?.content || "";
  } catch (err) {
    console.error("Groq API Error:", err.response?.data || err);
    throw new Error(`callGroqAPI failed: ${err.message}`);
  }
};

module.exports = alpha;