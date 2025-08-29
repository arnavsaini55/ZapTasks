// utils.js
import { OPENAI_API_KEY } from "@env"; // Your .env key
import { addChatMessage } from "../../FirestoreServices/firestoreService";

/**
 * Get AI response from OpenAI
 * @param {string} userMessage
 * @returns {Promise<string>} AI response
 */
export const getAIResponse = async (userMessage) => {
  try {
    const SYSTEM_PROMPT = `
You are a helpful AI assistant. Respond in START, THINK, EVALUATE, OUTPUT format.
Always think step by step before giving the output.
returns only the OUTPUT section in JSON format.
Output JSON format:
{
  "START": "Starting process",
  "THINK": "Your thought process here",
  "EVALUATE": "Awaiting evaluation",
  "OUTPUT": "Final answer here"
}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();
    const aiMessage = data?.choices?.[0]?.message?.content || "AI did not respond.";

    // Save AI message to Firestore
    await addChatMessage(aiMessage, "ai");

    return aiMessage;
  } catch (error) {
    console.error("Error getting AI response:", error);
    return "Sorry, I couldn't process your request.";
  }
};
