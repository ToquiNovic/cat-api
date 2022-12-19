const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT } = require("./config");
const {
  allowOrigin,
  unknownEndPoint,
  errorHandler,
} = require("./utils/middleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.set("port", PORT);
app.use(allowOrigin);

app.use("/api", require("./routes"));

app.use(unknownEndPoint);
app.use(errorHandler);

module.exports = app;
