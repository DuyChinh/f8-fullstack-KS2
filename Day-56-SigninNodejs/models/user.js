'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(30),
      email: DataTypes.STRING(100),
      password: DataTypes.STRING(100),
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return User;
};