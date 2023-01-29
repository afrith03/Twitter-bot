//Open AI NPM
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI,
});
const openai = new OpenAIApi(configuration);
let promptArray = [
  "write a life quote in english",
  "write an inspirational quote in english",
  "Write a funny quote",
  "Write a qoute on Black life",
  "Write a qoute Technology"

];
const getPrompt = (arr) => {
  let randPrompt = Math.round(Math.random() * (arr.length-1));
  return arr[randPrompt];
};

const openAIbot = async () => {
  let prompt = getPrompt(promptArray);
  const completion = await openai.createCompletion({
    model: "text-davinci-001",
    prompt: prompt,
    max_tokens: 100,
  });
  return completion.data.choices[0].text;
};

module.exports = { openAIbot };
