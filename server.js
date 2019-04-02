const express = require("express"); // importing a CommonJS module
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const md = require("./middleware");
const err = require("./errors");

const myTeam = md.myTeam;
const logger = md.logger;
const auth = md.auth;
const myError = err.myError;

const hubsRouter = require("./hubs/hubs-router.js");

const server = express();
//third party midd
server.use(express.json());
server.use(cookieParser());
server.use(helmet());
//custom midd
server.use(myTeam); //dont need to invoke firstMiddleware
server.use(logger);
//server.use(auth("webdev"));

server.use("/api/hubs", hubsRouter);

// server.get("/", (req, res, next) => {
//   //throw new Error({ message: "You got no foo"})
//   if (req.headers.foo) {
//     res.send(`
//     <h2>lalalallalalalalal</h2>
//     <p>Welcome ${req.team} to the lalalalalalala API</p>
//     `);
//   } else {
//     next({
//       message: "You got no foo"
//     });
//   }
// });

server.get("/", (req, res, next) => {
  if (req.cookies.visited) {
    res.send("I NO U");
  } else {
    res.set("Set-Cookie", "visited=true");
    res.send(
      "I DONT THINK WE HAVE MET....................YET? HAHAHAHAAH!!!!!!!!!"
    );
  }
});

server.use(myError); // connected at end so all errors that occur , occur before it because order matters

// server.get("/", (req, res, next) => {
//   res.send(`
//     <h2>here u go</h2>
//     `);
// });

module.exports = server;
