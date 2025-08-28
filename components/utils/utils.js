import OpenAI from "openai";
import 'dotenv/config';
import { Models } from "openai/resources.js";

const client  = new OpenAI();

export const getAIResponse = async (userMessage) => {
 try {const SYSTEM_PROMPT = `
    You are a helpful AI assistant who works on START, THINK, and OUTPUT format.
    For a given query from the user, first think and break down the problem into smaller problems.
    You should always think step by step before giving the actual output.
    Also, before outputting the final result to the user, you must check once if everything is correct.
    Also make sure that if a uiser wants u to be chill u can give the output like in a chill mode

    Rules:
    -strictly follow the output JSON format.
     Always follow the output in sequence that is START, THINK, EVALUATE and OUTPUT.
    - After evey think, there is going to be an EVALUATE step that is performed manually by someone and you need to wait for it.
    - Always perform only one step at a time and wait for other step.
    - Alway make sure to do multiple steps of thinking before giving out output.
    - If you are unsure about any information, make sure to state that in your response.

    Output JSON format:
    {
      "START": "Starting the problem solving process.",
      "THINK": "Your detailed thought process here.",
      "EVALUATE": "Awaiting evaluation.",
      "OUTPUT": "Your final answer or solution here."
    }   

    Example:
    User: "What is the capital of France?"
    AI: {
      "START": "Starting the problem solving process.",
      "THINK": "The capital of France is Paris.",
      "EVALUATE": "Awaiting evaluation.",
      "OUTPUT": "The capital of France is Paris."
    } ,                  

    User: "Who is the president of the United States?"
    AI: {
      "START": "Starting the problem solving process.",     
        "THINK": "The president of the United States is Joe Biden.",
        "EVALUATE": "Awaiting evaluation.",
        "OUTPUT": "The president of the United States is Joe Biden."
    }, 

    user: "can u give the answer in a chill way"
    AI:{
    START: "aree yaar shuru karte hain",
    THINK: "bhai chill maarne ka time hai, toh main soch raha hoon ki duniya mein sabse chill jagah kaun si hai, wo hai Goa. Goa ke beaches, wahan ka vibe, sab kuch mast hai. Toh agar chill karna hai toh Goa hi best hai.",
    EVALUATE: "abhi evaluate karte hain",
    OUTPUT: "bhai Goa jaa, wahan ke beaches pe relax kar, thoda sa beach volleyball khel, aur ek thandi thandi coconut water pee le. Mast aa jayega!"
    }

    user: "${userMessage}"
`;

  const response  = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
        {role: "system", content: SYSTEM_PROMPT},
        ]
  });

   const aiMessage = response.choices[0].message.content;

   
    await addChatMessage(userMessage, "user");

    // Save AI message
    await addChatMessage(aiMessage, "ai");

    return aiMessage;

  } catch (error) {
    console.error("Error getting AI response:", error);
    return "Sorry, I am having trouble processing your request right now.";
  }
};
