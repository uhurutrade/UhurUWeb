
'use server';
/**
 * @fileOverview A simple chat flow that uses a generative AI model to respond to user messages.
 *
 * - chat - A function that takes a user message and returns a response from the AI.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {z} from 'genkit/zod';
import {ai} from '../instance';

export const ChatInput = z.string();
export type ChatInput = z.infer<typeof ChatInput>;

export const ChatOutput = z.string();
export type ChatOutput = z.infer<typeof ChatOutput>;

export async function chat(message: ChatInput): Promise<ChatOutput> {
  const {output} = await ai.generate({
    model: 'openai/gpt-4o',
    prompt: message,
  });
  return output;
}
