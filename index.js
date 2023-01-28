require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js");
const { openAIbot } = require("./openAi.js");
//cron Job
const CronJob = require("cron").CronJob;
//express
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})



const tweet = async () => {
  try {
    var tweetText = await openAIbot()
    await twitterClient.v2.tweet(tweetText +"\n \n Follow for More #lifequotes");
    console.log("Tewwt success" + tweetText )
  } catch (e) {
    console.log(e);
  }
};

const cronTweet = new CronJob("30 * * * * *", async () => {
    tweet();
  });
  
  cronTweet.start();
