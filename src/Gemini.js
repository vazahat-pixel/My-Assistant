// Gemini.js
import axios from "axios";
import 'dotenv/config'
require('dotenv').config()

const API_KEY = process.env(Api_keys) // ← your key
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export async function GenrateapiResponse(prompt) {
  console.log("🔥 Prompt:", prompt);
  try {
    const response = await axios.post(URL, {
      prompt: {
        text: prompt,
      },
      temperature: 0.7,
      candidateCount: 1,
      topK: 40,
      topP: 0.95,
    });

    return response.data.candidates[0].output;
  } catch (error) {
    console.error("🔥 API Error:", error);
    return "Error: " + error.message;
  }
}
