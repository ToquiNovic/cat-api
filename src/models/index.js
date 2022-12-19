module.exports = (sequelize) => {
  require("./usuario")(sequelize);
  require("./estado")(sequelize);
};
