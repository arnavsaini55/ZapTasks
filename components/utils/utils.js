// utils.js
import { OPENAI_API_KEY } from "@env"; // read API key from .env
import { addChatMessage } from "../../FirestoreServices/firestoreService";

/**
 * Get AI response from OpenAI
 * @param {string} userMessage - Message from the user
 * @returns {Promise<string>} AI response
 */
export const getAIResponse = async (userMessage) => {
  try {
    const SYSTEM_PROMPT = `
You are a helpful AI assistant who works on START, THINK, and OUTPUT format.
For a given query from the user, first think and break down the problem into smaller problems.
Always think step by step before giving the output.
Follow the sequence: START -> THINK -> EVALUATE -> OUTPUT.
If user wants a chill answer, respond in a chill mode.

Output JSON format:
{
  "START": "Starting the problem solving process.",
  "THINK": "Your detailed thought process here.",
  "EVALUATE": "Awaiting evaluation.",
  "OUTPUT": "Your final answer here."
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

    // Extract AI response
    const aiMessage = data?.choices?.[0]?.message?.content || "AI did not respond properly.";

    // Save messages to Firestore
    await addChatMessage(userMessage, "user");
    await addChatMessage(aiMessage, "ai");

    return aiMessage;

  } catch (error) {
    console.error("Error getting AI response:", error);
    return "Sorry, I am having trouble processing your request right now.";
  }
};
