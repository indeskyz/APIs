const apiService = require("../services/apiReqService");
const {
  setCacheWithExpiry,
} = require("../helpers/cacheServices/cacheFunctions");
const { formatDataToJSON } = require("../helpers/userServices/formatUserInput");

const postsController = (tags, sortBy, direction, res, req) => {
  apiService(tags, sortBy, direction).then((data) => {
    setCacheWithExpiry(req.originalUrl, 180, formatDataToJSON(data));
    res.status(200).json(data);
  });
};

module.exports = postsController;
