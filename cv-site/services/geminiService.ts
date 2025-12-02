import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from '../constants';

// We'll use a singleton pattern or just export the function since it's stateless enough here.
// NOTE: In a real production app, you might proxy this through a backend to hide the key,
// but for this portfolio demo, we assume the user provides the key or it's in env.

const getClient = () => {
  const apiKey = process.env.API_KEY; 
  if (!apiKey) {
    throw new Error("API Key not found in environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

export const chatWithPortfolio = async (userMessage: string, history: {role: 'user' | 'model', text: string}[]) => {
  try {
    const ai = getClient();
    
    // Construct the conversation history for context
    // We strictly use the system instruction to ground the AI in Oğuzhan's persona
    const systemInstruction = RESUME_CONTEXT;

    const model = 'gemini-2.5-flash';
    
    // We can use the chat API for maintaining history effectively
    const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7, // Balanced creativity and accuracy
            maxOutputTokens: 250, // Keep answers concise for a chat interface
        },
        history: history.map(msg => ({
            role: msg.role,
            parts: [{ text: msg.text }]
        }))
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};