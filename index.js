const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("../backend/app/model/model.index");

const Role = db.role;
const User = db.user;
var corsOptions = {
  origin: "http://localhost:4500",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop the existing DB and re-create ");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "admin",
  });

  Role.create({
    id: 2,
    name: "manager",
  });
}

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tpconnects" });
});

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

require("./app/routes/authRoute")(app);
require("./app/routes/flightRoute")(app);
