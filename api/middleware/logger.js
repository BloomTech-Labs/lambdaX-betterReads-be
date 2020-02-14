function logger(req, res, next) {
  console.log(
    `${req.method} was requested at ${req.url} on [${new Date().toISOString()}]`
  );
  next();
}

module.exports = logger;
