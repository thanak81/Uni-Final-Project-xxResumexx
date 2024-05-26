import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse, streamText } from "ai";

const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY || "");

export const generateContent = async (prompt,model) => {
  // Extract the `prompt` from the body of the request

    const result = await streamText({
      model: model,
      system: "You are a professional resume writer.",
      prompt: `Generate the following content in html struture with all font size the same and remove the html word when generate content: ${prompt}`
    });


  // Convert the response into a friendly text-stream
  return new StreamingTextResponse(result.toAIStream());
}


