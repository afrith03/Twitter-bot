require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js");
const { openAIbot } = require("./openAi.js");
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
    var tweetText = await openAIbot();
    await twitterClient.v2.tweet(
      tweetText.toString() + "\n \n Follow for More #lifequotes"
    );
    console.log("Tewwt success" + tweetText);
    return tweetText.toString();
  } catch (e) {
    console.log(e);
  }
};

app.use("/", (req, res) => {
  setInterval(async () => {
    var t = await tweet();
    res.json({ message: "hello twitter bot", tweet: t });
  }, 10000);

  //   var t = await tweet();
  //   res.json({ message: "hello twitter bot", tweet: t });
});

// const cronTweet = new CronJob("30 * * * * *", async () => {
//   tweet();
// });

// cronTweet.start();
