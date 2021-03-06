const auths = require("./auths");
const users = require("./users");
const articles = require("./articles");
const interests = require("./interests");
const reactions = require("./reactions");
const follows = require("./follows");
const search = require("./search");
const { handleError } = require("./utils/errorHandler");

function routes(app) {
  app.use("/api/auth", auths);
  app.use("/api/users", users);
  app.use("/api/articles", articles);
  app.use("/api/interests", interests);
  app.use("/api/follows", follows);
  app.use("/api/reactions", reactions);
  app.use("/api/search", search);
  app.use(handleError);

  app.get("/", (req, res) => {
    res.status(200).json({
      api: "running"
    });
  });
}

module.exports = routes;
