const { Sequelize } = require("sequelize");
//fayyaz9700
const db = new Sequelize("node", "node", "fairtraderNodejsNodePassword123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
