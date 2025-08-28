import OpenAI from "openai";
import 'dotenv/config';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Safely extract JSON block
function parseJSONFromString(str) {
  const match = str.match(/\{[\s\S]*\}/); // first {...} block
  if (!match) throw new Error("No JSON found in response");
  return JSON.parse(match[0]);
}

// Enforce step & content keys
export async function generateAIResponse(messages) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: messages,
    });

    const rawContent = response.choices[0].message.content;
    const parsed = parseJSONFromString(rawContent);

    // Ensure keys exist
    if (!parsed.step || !parsed.content) {
      return { step: "OUTPUT", content: rawContent }; // fallback to raw text
    }

    return parsed;
  } catch (err) {
    console.error("Error in generateAIResponse:", err.message);
    throw err;
  }
}
