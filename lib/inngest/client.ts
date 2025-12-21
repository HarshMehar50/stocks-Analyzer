import {Inngest} from "inngest";

export const inngest = new Inngest({
    id : "analyzer",
    ai : {gemini : {apiKey : process.env.AI_API_KEY}},
})
