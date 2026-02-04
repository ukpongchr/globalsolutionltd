import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the client directly with the environment variable as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are "Engineer AI", the expert virtual assistant for Global Solutions. 
Global Solutions is a world-class provider of:
1. Power Generation (Thermal, Hydro, Solar, Gas Turbines).
2. Electrical Engineering (High Voltage Systems, Substations, Grid Modernization).
3. Machinery Maintenance (Preventive, Predictive, Overhauls).

Your Goal: Assist potential clients, engineers, and partners by answering technical inquiries, explaining our services, and providing preliminary troubleshooting advice based on general engineering principles.

Tone: Professional, Knowledgeable, Safety-Conscious, yet Approachable.
Limitations: Do not provide specific blueprints or execute code. If a user asks for a quote, direct them to the Contact page.
Always emphasize safety standards (ISO, OSHA) when relevant.
Keep answers concise but informative.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, // Balance between creativity and factual accuracy
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
    return await chat.sendMessageStream({ message });
};