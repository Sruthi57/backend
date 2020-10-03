const db = require("../model/model.index");
const flightDetails = db.flightDetails;
const operations = db.Sequelize.Op;
const flightData = db.flightDetails;

exports.create = (req, res) => {
  flightData
    .create({
      flightNumber: req.body.flightNumber,
      airlineName: req.body.airlineName,
      startLocation: req.body.startLocation,
      destination: req.body.destination,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) =>
      res.status(500).send({
        message: error.message || "Unable to create airlines data",
      })
    );
};

exports.findAll = (req, res) => {
  flightDetails
    .findAll()
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((error) =>
      res.status(500).send({
        message: error.message || "Unable to retrieve data",
      })
    );
};

exports.delete = (req, res) => {
  flightDetails
    .destroy({
      where: { id: req.params.id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Flight data deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete flight data with id=${id}.`,
        });
      }
    });
};
