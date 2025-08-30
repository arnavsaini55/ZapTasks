// utils.js
import { OPENAI_API_KEY } from "@env";
import { addChatMessage } from "../../FirestoreServices/firestoreService";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Get AI response from OpenAI
 * @param {string} userMessage - The user's message to respond to
 * @returns {Promise<string>} AI response
 */
export const getAIResponse = async (userMessage) => {
  try {
    const SYSTEM_PROMPT = `You are a helpful AI assistant that helps users manage their tasks and provides intelligent responses. Keep your responses concise and friendly.`;

    // Get previous messages for context
    const chatHistory = await AsyncStorage.getItem("chatMessages");
    const previousMessages = chatHistory ? JSON.parse(chatHistory) : [];
    const recentMessages = previousMessages.slice(-5); // Get last 5 messages for context

    const apiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...recentMessages.map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text || msg.content
      })),
      { role: "user", content: userMessage }
    ];

    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key is missing. Please check your environment variables.');
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: apiMessages,
          max_tokens: 1000,
          temperature: 0.7,
          presence_penalty: 0.6,
          frequency_penalty: 0.5,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      if (!data.choices?.[0]?.message?.content) {
        throw new Error('Invalid response format from OpenAI API');
      }

      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw new Error(error.message || 'Failed to get AI response');
    }

    // The error handling is now done in the try-catch block above

    const aiMessage = data.choices[0].message.content.trim();

    // Save AI message to Firestore
    await addChatMessage(aiMessage, "ai");

    // Create new message object
    const newMessage = {
      id: Date.now().toString() + "_ai",
      text: aiMessage,
      sender: "ai",
      timestamp: new Date().toISOString()
    };

    // Update local storage
    const currentMessages = previousMessages;
    const updatedMessages = [...currentMessages, newMessage];
    await AsyncStorage.setItem("chatMessages", JSON.stringify(updatedMessages));

    return aiMessage;
  } catch (error) {
    console.error("Error getting AI response:", error);

    // Specific error handling based on error type
    if (!OPENAI_API_KEY) {
      throw new Error("Configuration error: API key is missing");
    }
    if (error.message.includes('Network error')) {
      throw new Error("Network error: Please check your internet connection");
    }
    if (error.message.includes('OpenAI API Error')) {
      // Pass through the specific API error message
      throw error;
    }
    if (error.message.includes('Invalid response')) {
      throw new Error("Received invalid response from AI service");
    }
    if (error.message.includes('Failed to parse')) {
      throw new Error("Failed to process AI response");
    }

    // Generic error if none of the above
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};
