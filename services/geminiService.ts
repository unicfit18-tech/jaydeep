
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Defensive check for the environment variable.
 * In production/browser environments, process.env might not be defined.
 */
const getApiKey = (): string => {
  try {
    return (typeof process !== 'undefined' && process.env && process.env.API_KEY) ? process.env.API_KEY : '';
  } catch (e) {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const generateMenuRecommendation = async (
  eventType: string,
  guestCount: number,
  preferences: string
) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a high-end catering menu for a ${eventType} with ${guestCount} guests. Special considerations: ${preferences}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            appetizers: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 sophisticated appetizers"
            },
            mainCourses: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 gourmet main courses"
            },
            desserts: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 2 exquisite desserts"
            },
            beverages: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 2 signature beverage options"
            }
          },
          required: ["appetizers", "mainCourses", "desserts", "beverages"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating menu:", error);
    return null;
  }
};
