const Sequelize = require("sequelize");
const db = require("../../db");

module.exports = db.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
