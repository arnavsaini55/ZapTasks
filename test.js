import { generateAIResponse } from "./components/utils/utils.js";

(async () => {
  const messages = [
    {
      role: "system",
      content: `
      You are an AI assistant. Always respond in strict JSON format:
      { "step": "START | THINK | EVALUATE | OUTPUT", "content": "string" }
      Make sure keys are exactly "step" and "content".
      `
    },
    {
      role: "user",
      content: "give the roadmap to inject a personal assistant into an app"
    },
    {
        role: "assistant",
        content: `{ "step": "START", "content": "To inject a personal assistant into an app, follow these steps: 1. Define the assistant's purpose and features. 2. Choose the right AI technology (e.g., NLP, machine learning). 3. Design the user interface for interaction. 4. Integrate the AI backend with the app. 5. Test and refine the assistant's performance." }`
    }
  ];

  try {
    const result = await generateAIResponse(messages);
    console.log("Step:", result.step);
    console.log("Content:", result.content);
  } catch (err) {
    console.error("Test failed:", err.message);
  }
})();
