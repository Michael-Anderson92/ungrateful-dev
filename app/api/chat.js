import { AI } from '@vercel/sdk';

const ai = new AI({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const response = await ai.generateText(prompt);
    res.status(200).json({ response });
  } catch (error) {
    console.error('AI error:', error);
    res.status(500).json({ error: 'AI response failed' });
  }
}