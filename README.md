# DATASET SPLITTER WITH AI
This project has been discontinued. 
It sounded great in my head where you could submit data, and a handy AI will help you split the data into different files - but ultimately it started to look like a wrapper (or middleman) for gpt.

I'm just writing what I'm thinking quick and dirty on what I've learned for future reference.

## Lambda Functions: CORS config
Under Configure Function URL:
- tick Configure cross-origin resource sharing(CORS)
- allow origin: (http://...)
- Allow headers: content-type
- Allow methods (ie GET, POST)

## Lambda Functions: uploading a package
- mkdir tempDir
- touch index.mjs (insert your lambda function contents here)
- cd tempDir
- npm init -y
- npm install [your packages] (in my case it was openai)
- 7zip the files WITHIN tempDir, do NOT include tempDir (don't use powershell Compress-Archive)
- upload the .zip file (it replaces your original index.mjs)
- remember to add any .env variables you need
- then in your lambda function index.mjs file

```code
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const systemPrompt = `
You are an AI assistant categorises data according to user requirements.
Input example:
Data: (array of strings, each entry is a string that represents one row)

Output is each category (the category appears exactly according to user specification), and the indices of the row that fits the category best.
The index of the row is always 0 based.
Output:
{
    "category1": [0,2,4,5],
    "category2": [1,3]
}



`;

export const handler = async (event) => {
    const body = JSON.parse(event.body);
    const {data, prompt} = body;
 
    if (!prompt || prompt.trim() === "") {
        return respond(400, { error: "Prompt was empty!" });
    }
    

    try {
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `User prompt: ${prompt}` },
                { role: "user", content: `Data: ${data}` },
            ],
            temperature: 0.2,
            // 128k tokens is the max
            max_tokens: 1024,
            top_p: 1
        });   
        const replyAI = aiResponse.choices[0].message.content;
        const result = JSON.parse(replyAI);
   
        return respond(200, result);
    } catch (error) {
        console.log(error);
        return respond(400, { error: error.message });
    }
}




const respond = (code, data) => {
    return {
        statusCode: code,
        body: JSON.stringify(data),
    };
};
```

## Estimating File Size that would require 128k tokens

gpt-4o-mini => estimate safe upperbound ~93.75KB, 1365 tokens per 1KB

- input limit of 128,000 tokens, output of 16,384
- current MVP assumes data directly sent to gpt, not done in batches
- officialy ~4 english chars per token, but based on experience, 2 chars per token
- usually english chars are 1 char = 1 byte, symbols are 3 bytes each
- ideal estimate: 128k tokens * 4 characters per token * 1 bytes per character = 375KB
-  more safe estimate: 93.75 KB (1 token per 1 char)




  