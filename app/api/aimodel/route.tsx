// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from 'openai';
// export const openai = new OpenAI({
//   baseURL: 'https://openrouter.ai/api/v1',
//   apiKey: process.env.OPENROUTER_API_KEY,
  
// });

// const PROMPT = `You are an Al Trip Planner Agent (name "trevola") . Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.
// Only ask questions about the following details in order, and wait for the user's answer before asking the next:
// 1. Starting location (source)
// 2. Destination city or country
// 3. Group size (Solo, Couple, Family, Friends)
// 4. Budget (Low, Medium, High)
// 5. Trip duration (number of days)
// 6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation)
// 7. Special requirements or preferences (if any)
// Do not ask multiple questions at once, and never ask irrelevant questions.
// If any answer is missing or unclear, politely ask the user to clarify before proceeding.
// Always maintain a conversational, interactive style while asking questions.
// Along wth response also send which ui component to display for generative UI for example 'budget/groupSize/TripDuration/Final) , where Final means Al generating complete final outpur
// Once all required information is collected, generate and return a strict JSON response only (no explanations or extra text) with following JSON schema:
// {
//     resp:'Text Resp'
//     ui:'budget/groupSize/TripDuration/Final)'
// }
// `


// export async function POST(req:NextRequest){

//     const {messages} = await req.json();

//     try{

//     const completion = await openai.chat.completions.create({
//     model: 'openai/gpt-4.1-mini',
//     reasoning: { effort: "low" },
//     response_format: {
//         type: 'json_object',
//     },
//     messages: [
//         {
//         role: 'system',
//         content: PROMPT,
//         },
//         ...messages
//     ],
    
//   });
//   console.log(completion.choices[0].message);

//   const message = completion.choices[0].message;

//   return NextResponse.json(JSON.parse(message.content || ""))

//   }catch(err){
//     // console.log("Error in AI Model API:", err);
//     return NextResponse.json(err)
//   }

// }

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const PROMPT = `
You are an AI Trip Planner Agent named "Trevola".

Your task is to help users plan a trip by asking ONE relevant question at a time.
Follow this exact order and wait for the user's response before moving forward:

1. Starting location (source)
2. Destination city or country
3. Group size (Solo, Couple, Family, Friends)
4. Budget (Low, Medium, High)
5. Trip duration (number of days)
6. Travel interests (adventure, sightseeing, cultural, food, nightlife, relaxation)
7. Special requirements or preferences (if any)

Rules:
- Ask only ONE question at a time
- Never ask irrelevant questions
- If the user's answer is unclear or missing, politely ask for clarification
- Maintain a friendly, conversational tone
- ALWAYS respond in valid JSON only (no extra text)

For every response, return JSON in the following format:

{
  "resp": "Text response for the user",
  "ui": "source | destination | groupSize | budget | tripDuration | interests | preferences | final"
}

When all required information is collected, set "ui" to "final" and generate the complete trip plan.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
       max_tokens: 500,
    //   reasoning: { effort: "low" },
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: PROMPT },
        ...messages,
      ],
    });

    const message = completion.choices[0].message.content;

    if (!message) {
      throw new Error("Empty response from AI");
    }

    return NextResponse.json(JSON.parse(message));
  } catch (error: any) {
    console.error("AI API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate response",
        details: error?.message ?? "Unknown error",
      },
      { status: 500 }
    );
  }
}
