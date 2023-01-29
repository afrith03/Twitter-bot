//Open AI NPM
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI,
});
const openai = new OpenAIApi(configuration);
// let promptArray = [
//   "write a life quote in english",
//   "write an inspirational quote in english",
// ];
// const getPrompt = () => {
//   let randPrompt = Math.random() * promptArray.length;
//   return promptArray[randPrompt];
// };

const openAIbot = async () => {
//   let prompt = getPrompt();
  const completion = await openai.createCompletion({
    model: "text-davinci-001",
    prompt:  "write a life quote in english",
    max_tokens: 100,
  });
  return completion.data.choices[0].text;
};

module.exports = { openAIbot };
