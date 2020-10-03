const { authJwt } = require("../middleware/middleware.index");
const controller = require("../controller/flightController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/flightlist", [authJwt.verifyToken], controller.findAll);

  app.post(
    "/api/addFlightDetails",
    [authJwt.verifyToken, authJwt.isManager],
    controller.create
  );

  app.delete(
    "/api/deleteFlightData/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
};
