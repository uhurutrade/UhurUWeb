'use server';
/**
 * @fileOverview A simple chat flow that uses the official OpenAI library to respond to user messages.
 *
 * - chat - A function that takes a user message and returns a response from the AI.
 */
import OpenAI from 'openai';

// The user's input will be a simple string.
export type ChatInput = string;

// The assistant's output will also be a simple string.
export type ChatOutput = string;

export async function chat(message: ChatInput): Promise<ChatOutput> {
  if (!process.env.OPENAI_API_KEY) {
    return "The OPENAI_API_KEY environment variable is not set. Please add it to your .env file.";
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: "You are UhurU's assistant. Be helpful and friendly. Keep your answers concise.",
        },
        { role: 'user', content: message },
      ],
    });

    return completion.choices[0]?.message?.content ?? "Sorry, I couldn't get a response.";
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return "Sorry, there was an error communicating with the AI. Please try again later.";
  }
}
