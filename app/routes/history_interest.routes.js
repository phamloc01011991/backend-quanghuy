const { authJwt } = require("../middleware");
const controller = require("../controllers/history_interest.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/history_interest", [authJwt.verifyToken], controller.listing);
};
