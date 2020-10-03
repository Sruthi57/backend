module.exports = (sequelize, Sequelize) => {
  const FlightDetails = sequelize.define("flightDetails", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    flightNumber: {
      type: Sequelize.STRING,
    },
    airlineName: {
      type: Sequelize.STRING,
    },
    startLocation: {
      type: Sequelize.STRING,
    },
    destination: {
      type: Sequelize.STRING,
    },
    startTime: {
      type: Sequelize.STRING,
    },
    endTime: {
      type: Sequelize.STRING,
    },
  });
  return FlightDetails;
};
