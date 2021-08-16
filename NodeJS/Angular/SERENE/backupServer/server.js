const express = require("express");
const helmet = require("helmet");
const { PORT, clientOrigin } = require("./helpers/env.dev");
const cors = require("cors");

const { messagesRouter } = require("./messages/messages.router");
const serverStartTime = new Date().toLocaleString();

const app = express();
const router = express.Router();

app.use(helmet());
app.use(cors({ origin: clientOrigin }));
app.use(express.json());

//app.get("/", messagesRouter);
app.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`Server Started on ${serverStartTime} `));
