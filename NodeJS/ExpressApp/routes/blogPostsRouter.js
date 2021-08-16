require("dotenv").config();
const makeAPIReq = require("./callAPI");
const express = require("express");
const _ = require("lodash");
const { sortByValues, directionValues } = require("../helpers/requiredParams");
const {
  formatDataToJSON,
  formatQueryTags,
} = require("../helpers/formatUserInput");
const createErrorMessage = require("../helpers/errorMessages");

const {
  checkRedisCache,
  setCacheWithExpiry,
} = require("../helpers/cacheFunctions");

const app = express();

app.get("/api/ping", async (req, res) => {
  res.status(200).json({ success: true });
});

app.get("/api/posts", checkRedisCache, async (req, res, next) => {
  const { tags, sortBy, direction } = req.query;
  if (!tags) {
    res.status(400).json(createErrorMessage("Tags parameter is required"));
    return;
  }
  if (sortBy && !sortByValues.includes(sortBy)) {
    res.status(400).json(createErrorMessage("sortBy parameter is invalid"));
    return;
  }
  if (direction && !directionValues.includes(direction)) {
    res.status(400).json(createErrorMessage("direction parameter is invalid"));
    return;
  }
  if (sortBy) {
    makeAPIReq(tags, sortBy).then((data) => {
      setCacheWithExpiry(req.originalUrl, 180, formatDataToJSON(data));
      res.status(200).json(data);
    });
    return;
  }
  if (direction) {
    makeAPIReq(tags, undefined, direction).then((data) => {
      setCacheWithExpiry(req.originalUrl, 180, formatDataToJSON(data));
      res.status(200).json(data);
    });
    return;
  } else {
    makeAPIReq(tags).then((data) => {
      setCacheWithExpiry(req.originalUrl, 180, formatDataToJSON(data));
      res.status(200).json(data);
    });
    return;
  }
});

module.exports = app;
