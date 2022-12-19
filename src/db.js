const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = require("./config");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Coneccion establecida con exito a la base de datos!");
  })
  .catch((error) => {
    console.error("Error al conectarse a la base de datos: ", error);
  });

require("./models")(sequelize);

const { Usuario, Estado } = sequelize.models;

Estado.hasOne(Usuario);
Usuario.belongsTo(Estado);

module.exports = {
  db: sequelize,
  Usuario,
  Estado,
};
