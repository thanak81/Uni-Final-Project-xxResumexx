import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  GoogleGenerativeAIStream,
  StreamingTextResponse,
  streamText,
} from "ai";
import { fixGrammar } from "./fix-grammar";
import { aiCheckState } from "@/app/main/resume/state/GlobalState";
import { generateContent } from "./generate-content";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY || "");

// export async function POST(req) {
//   // Extract the `prompt` from the body of the request
//   const { prompt} = await req.json();
//     const google = createGoogleGenerativeAI({
//       apiKey: process.env.BARD_API_KEY || ""
//     })
//     const model = google("models/gemini-pro")

//     const result = await streamText({
//       model: model,
//       system: "You are a professional resume writer.",
//       prompt: `Generate the following content in html struture with all font size the same and remove the html word when generate content: ${prompt}`
//     });

//   // Convert the response into a friendly text-stream
//   return new StreamingTextResponse(result.toAIStream());
// }
// const checkAiState = aiCheckState((state) => state.value);

export async function POST(req) {
  const google = createGoogleGenerativeAI({
    apiKey: process.env.BARD_API_KEY || ""
  })
  const model = google("models/gemini-pro")

  const { prompt , title} = await req.json();
  console.log("title",title)
  switch (title) {
    case "generateContent":
      return await generateContent(prompt,model)
      break;
    case "fixedGrammar":
      return await fixGrammar(prompt,model);
      break;
  }
  // return await generateContent(prompt,model)
}
