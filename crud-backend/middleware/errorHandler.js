const { logEvents } = require("./logEvents");

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, "error.log");
  console.error(err.stack);
  res.status(500).send(err.message);
  next();
};

module.exports = errorHandler;
