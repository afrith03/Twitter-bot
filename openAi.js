//Open AI NPM
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI,
});
const openai = new OpenAIApi(configuration);

const openAIbot = async () => {
  const completion = await openai.createCompletion({
    model: "text-davinci-001",
    prompt: "write a life quote",
    max_tokens: 100,
  });
  return completion.data.choices[0].text;
};

module.exports = { openAIbot };
