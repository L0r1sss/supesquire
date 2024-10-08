import { ChatOpenAI } from '@langchain/openai';
import { OpenAIEmbeddings } from '@langchain//openai';
import { BufferMemory } from 'langchain/memory';
import { OpenAI } from 'openai';

const chatMemory = new BufferMemory();

const llm = new ChatOpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',
  streaming: true,
  temperature: 0.9
});

const openAI = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

const openAIEmbedding = new OpenAIEmbeddings({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  modelName: 'text-embedding-ada-002'
});

export { chatMemory, llm, openAI, openAIEmbedding };
