import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse, streamText } from "ai";

const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY || "");

export const general = async (prompt,model)=>  {
  // Extract the `prompt` from the body of the request

    const result = await streamText({
      model: model,
      system: "You are a resume and cover letter assitant expert",
      prompt: ` Answer the text with your resume and cover letter knowledge.
      Text: ${prompt}
      `
    });


  // Convert the response into a friendly text-stream
  return new StreamingTextResponse(result.toAIStream());
}


