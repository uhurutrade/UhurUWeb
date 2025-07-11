
'use server';
/**
 * @fileOverview A simple chat flow that uses a generative AI model to respond to user messages.
 *
 * - chat - A function that takes a user's message and returns a response from the AI.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/instance';
import {z} from 'zod';

const ChatInputSchema = z.string();
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.string();
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(message: ChatInput): Promise<ChatOutput> {
  const llm = ai.getLlm('googleai/gemini-1.5-flash-latest');
  const {output} = await llm.generate({
    prompt: message,
  });
  return output;
}
