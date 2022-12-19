const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Usuario extends Model {}
  Usuario.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Usuario" }
  );
};
