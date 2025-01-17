import {dotenv} from 'dotenv'

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey= import.meta.env.VITE_GEMINI_API_KEY
console.log(import.meta.env)
console.log("API Key:", apiKey)

//const apiKey = "AIzaSyBQrMMd3MluwyYQVAmDj5Rr5a1nkk_ElEc" // Fetch API key from the environment variable
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);  // Replace with your message input
  const response=result.response;
  console.log(result.response.text());
  return response.text()
}

export default run;
