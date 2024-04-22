//Aplicacion Modelo-Vista-Controlador con MariaDB, MySQL, Express con operaciones CRUD
const express = require("express"); //Importar express que es un framework de Node.js que nos permite crear servidores web
const exphbs = require("express-handlebars"); //Importar express-handlebars que es un motor de plantillas para Express que nos permite crear vistas de manera sencilla
const app = express(); //Crear una instancia de express para poder utilizar sus metodos
const port = process.env.PORT || 3000; //Definir el puerto en el que se va a ejecutar el servidor
const routes = require("./src/routes/index"); //Importar el archivo de rutas
app.use(express.json()); //Permitir a express leer y enviar datos en formato JSON
app.use(express.urlencoded({ extended: true })); //Permitir a express leer y enviar datos en formato URL-encoded
app.use(express.static("public")); 
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.use("/", routes); //Definir la ruta base de la aplicacion

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Servidor en linea en puerto: ${port}`);
});
