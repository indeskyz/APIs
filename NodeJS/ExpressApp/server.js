require("dotenv").config();
const PORT = process.env.PORT;
const SERVER_ADDRESS = process.env.SERVER_ADDRESS;
const express = require("express");
const routeHandler = require("./routes/routeHandler");
const app = express();

const currTime = new Date().toLocaleString();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routeHandler);

app.listen(PORT, () => {
  console.log(
    `Server started at: ${currTime} \nServer is running at: ${SERVER_ADDRESS}:${PORT}`
  );
});
