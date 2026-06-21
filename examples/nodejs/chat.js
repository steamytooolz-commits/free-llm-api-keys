/**
 * FreeLLMShare — Basic Chat.
 *
 * Usage:
 *   npm install openai
 *   OPENAI_API_KEY="paste-your-key-here" node chat.js
 */
import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('Set OPENAI_API_KEY before running this example.');
}

const client = new OpenAI({ baseURL: 'https://aiapiv2.pekpik.com/v1', apiKey });
const r = await client.chat.completions.create({ model: 'gpt-5.5', messages: [{ role: 'user', content: 'Hello!' }] });
console.log(r.choices[0].message.content);
