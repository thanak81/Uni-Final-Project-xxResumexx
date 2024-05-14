import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse, streamText } from "ai";

const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY || "");

export async function POST(req) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // Ask Google Generative AI for a streaming completion given the prompt
  // const response = await genAI
  //   .getGenerativeModel({ model: "gemini-pro" })
  //   .generateAnswerStrea({
  //     contents: [{ role: "user", parts: [{ text: prompt }] }],
  //   });

    const google = createGoogleGenerativeAI({
      apiKey: process.env.BARD_API_KEY || ""
    })
    const model = google("models/gemini-pro")


    const result = await streamText({
      model: model,
      prompt,

    });


  // Convert the response into a friendly text-stream
  return new StreamingTextResponse(result.toAIStream());

  // Respond with the stream
  // return new StreamingTextResponse(stream);
}
