require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const connectDb = require("./config/dbConn");
const port = process.env.PORT || 3500;

connectDb();

app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", require("./routes/api/users"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html") || req.accepts("json")) {
    res.json({ error: "404 Page Not found" });
  } else {
    res.type("txt").send("404 Page Not found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
