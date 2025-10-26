import { GoogleGenAI } from "@google/genai";
import type { Problem } from '../types';
import { InteractionType, Language } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

if (!process.env.API_KEY) {
    // In a real app, you would want to handle this more gracefully.
    // For this example, we assume the API key is provided via environment variables.
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const model = "gemini-2.5-flash";

export const processAiRequest = async (
    type: InteractionType,
    problem: Problem,
    code: string,
    language: Language
): Promise<string> => {
    let prompt = "";
    const langName = language === Language.JavaScript ? "JavaScript" : "Python";
    switch (type) {
        case InteractionType.Hint:
            prompt = `The user is trying to solve the following ${langName} problem: "${problem.title}: ${problem.description}". Their current code is: \n\`\`\`${language}\n${code}\n\`\`\`\nThey are stuck and have asked for a hint. Provide a small, guiding question or a suggestion for the very next step. Do not give away the solution. Use the weaving analogy.`;
            break;
        case InteractionType.Explain:
            prompt = `The user is working on this ${langName} problem: "${problem.title}". Their current code is: \n\`\`\`${language}\n${code}\n\`\`\`\nThey have asked for an explanation. Explain the core programming concept behind the problem, or explain their current code if it's not empty, relating it back to the problem's goals. Use the weaving analogy. Keep it concise.`;
            break;
        case InteractionType.Review:
            prompt = `The user has submitted a solution for the ${langName} problem: "${problem.title}: ${problem.description}". Here is their code: \n\`\`\`${language}\n${code}\n\`\`\`\nAct as a senior software engineer conducting a friendly but thorough code review. Provide feedback on correctness, efficiency, style, and best practices. Structure your feedback into 'Strengths (Golden Threads)' and 'Areas for Improvement (Tangled Threads)'. Use the weaving analogy throughout. If the code is perfect, praise it enthusiastically.`;
            break;
    }

    try {
        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        return "An error occurred while communicating with the AI. The loom might be jammed.";
    }
};