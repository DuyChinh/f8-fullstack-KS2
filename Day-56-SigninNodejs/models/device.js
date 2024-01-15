"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Device.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      os: DataTypes.STRING,
      browser: DataTypes.STRING,
      time: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
      token: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      LastTimeLogin: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "devices",
      modelName: "Device",
      createdAt: "created_at",
      updatedAt: "updated_at",
      userId: "user_id",
    }
  );
  return Device;
};
