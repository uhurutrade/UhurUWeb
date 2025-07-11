
/**
 * @fileoverview This file configures and exports the Genkit AI instance.
 * It aconfigures Genkit to use OpenAI for generative AI tasks.
 */
import {genkit} from 'genkit';
import {openai} from '@genkit-ai/openai';

export const ai = genkit({
  plugins: [
    openai({
      apiKey: process.env.OPENAI_API_KEY,
    }),
  ],
});
