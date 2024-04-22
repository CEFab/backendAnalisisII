const Sequelize = require("sequelize");
const db = new Sequelize("ums", "root", "", {
  host: "120.0.0.1",
  dialect: "mysql",
}); //Crear una instancia de Sequelize para poder conectarnos a la base de datos

module.exports = db;
// module.exports = db.define("User",
// {
//   id:{
//     type:Sequelize.INTEGER(11),
//     allowNull:false,
//     primaryKey:true,
//     autoincrement:true
//   },
//   name:{
//     type:Sequelize.STRING,
//     allowNull:false,
//     unique:true
//   },
//   email:{
//     type:Sequelize.STRING,
//     allowNull:false,
//     unique:true
//   },
//   phone:{
//     type:Sequelize.STRING,
//     allowNull:false,
//     unique:true
//   }

// }

// )

//run command in cli: $sequelize migration:gernerate --name create_users_table

 //Exportar la instancia de Sequelize para poder utilizarla en otros archivos

// ¿Que es sequelize?
// Sequelize es un ORM (Object-Relational Mapping) que nos permite interactuar
// con bases de datos relacionales utilizando objetos en lugar de sentencias SQL.
// Un ejemplo de un objeto en Sequelize insetar un registro en una tabla de la base de datos
// seria:
// const db = require("./db");
// const { DataTypes } = require("sequelize");
// const User = db.define("User", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
// User.create({
//   name: "John Doe",
//   email: "
// });
// En este ejemplo, creamos un modelo de usuario con dos campos: name y email.