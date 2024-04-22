const User = require("../models/user");

const allUsers = async (req, res) => {
  res.render("home");
};

const userForm = async (req, res) => {
  res.render("create");
};

const saveUser = async (req, res) => {
  const { name, email, phone } = await req.body; //Extraer los datos del formulario
  const user = await User.create({ name: name, email: email, phone: phone }) //Crear un nuevo usuario en la base de datos
    .catch((err) => console.log(err)); //Manejar el error si no se puede crear el usuario
  console.log(user);
  res.redirect("/"); //Redireccionar al usuario a la página principal
};

module.exports = {
  allUsers,
  userForm,
  saveUser,
};
