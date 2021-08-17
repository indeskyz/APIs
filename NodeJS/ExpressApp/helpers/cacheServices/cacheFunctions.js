const redis_client = require("../../redisClient");

//uses /api/posts?tags=[value] as cache key
const checkRedisCache = (req, res, next) => {
  redis_client.get(req.originalUrl, (err, data) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    if (data) {
      let parsedData = JSON.parse(data);
      res.status(200).json(parsedData);
      return;
    }
    next();
    return;
  });
};

const setCacheWithExpiry = (key, seconds, value) => {
  redis_client.setex(key, seconds, value);
};

module.exports = { checkRedisCache, setCacheWithExpiry };
