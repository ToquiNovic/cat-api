const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Estado extends Model {}
  Estado.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Estado",
    }
  );
};
