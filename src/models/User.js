const Sequelize = require("sequelize");
const db = require("../../db");

module.exports = db.define("users", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoincrement: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING(20),
    allowNull: false,
    unique: true,
  }
}); 
