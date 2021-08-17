require("dotenv").config();
const express = require("express");
const postsRoute = require("./postsRoute");
const pingRoute = require("./pingRoute");
const { checkRedisCache } = require("../helpers/cacheServices/cacheFunctions");

const app = express();

app.get("/api/ping", pingRoute);
app.get("/api/posts", checkRedisCache, postsRoute);

module.exports = app;
