import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse, streamText } from "ai";

const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY || "");

export const fixGrammar = async (prompt,model)=>  {
  // Extract the `prompt` from the body of the request

    const result = await streamText({
      model: model,
      system: "You are grammar english expert.",
      prompt: `You are an AI writing assistant specialized in writing copy for resumes.
      Do not return anything else except the text you improved. It should not begin with a newline. It should not have any prefix or suffix text.
      Just fix the spelling and grammar of the following paragraph, do not change the meaning and returns in the language of the text:
      
      Text: ${prompt}
      
      Revised Text: """`
    });


  // Convert the response into a friendly text-stream
  return new StreamingTextResponse(result.toAIStream());
}


