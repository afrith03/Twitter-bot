const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});
//pass bearer token
let bearerToken = process.env.BEARER_TOKEN;
const bearer = new TwitterApi(bearerToken);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

module.exports = { twitterClient, twitterBearer };
