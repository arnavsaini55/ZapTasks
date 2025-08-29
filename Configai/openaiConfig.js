import { OPENAI_API_KEY } from "@env";
import OpenAI from "openai";
import 'cross-fetch/polyfill';


const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, 
});

export default client;
