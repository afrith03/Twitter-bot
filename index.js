require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js");
const { openAIbot } = require("./openAi.js");

//random quotes
const Quote = require("inspirational-quotes");
//cron Job
const CronJob = require("cron").CronJob;
//express
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const tweet = async () => {
  try {
    var quote = Quote.getQuote();
    // var tweetText = await openAIbot();
    await twitterClient.v2.tweet(
      // tweetText.toString() + "\n \n Follow for daily quotes #afrithtweets"

      //random quotes
      quote.text.toString() +
        "\n -" +
        quote.author.toString() +
        "\n \n Follow for daily quotes #NodeTweets #openAiTweets"
    );
    // console.log("Tewwt success" + tweetText);
    console.log("Tewwt success" + quote);
    return quote.text.toString();
  } catch (e) {
    console.log(e);
  }
};

app.get("/", async (req, res) => {
  var t = await tweet();
  res.json({ message: "hello twitter bot", tweet: t });
});

app.post("/twitter", async (req, res) => {
  var t = await tweet();
  res.json({ message: "hello twitter bot", tweet: t });
});

// const cronTweet = new CronJob("30 * * * * *", async () => {
//   tweet();
// });

// cronTweet.start();
