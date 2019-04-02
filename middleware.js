function myTeam(req, res, next) {
  //can anything to req and res
  req.team = "cool boiz gang";

  next();
}

function logger(req, res, next) {
  console.log({ Method: `Method present is ${req.method}` });
  console.log({ Protocol: `Protocol present is ${req.protocol}` });
  console.log({ HostName: `Hostname present is ${req.hostname}` });
  console.log({ URL: `URL present is",req.originalUrl}` });
  console.log("Params present are", req.params);
  console.log("queries present are", req.query);
  console.log("Body present is", req.body);
  console.log("Headers present are", req.headers);
  console.log("");
  next();
}

function auth(token) {
  return function(req, res, next) {
    if (req.headers.authorization == token) {
      next();
    } else {
      res.status(401).json({ errorMessage: "User not authenticated" });
    }
  };
}

module.exports = {
  myTeam,
  logger,
  auth
};
