require("dotenv").config();
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_ADDRESS = process.env.REDIS_ADDRESS;
const redis = require("redis");

const redis_client = redis.createClient({
  host: REDIS_ADDRESS,
  port: REDIS_PORT,
});

module.exports = redis_client;
