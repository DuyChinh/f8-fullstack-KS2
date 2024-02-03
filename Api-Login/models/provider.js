'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    static associate(models) {
      
    }
  }
  Provider.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Provider',
    tableName: "providers",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
  return Provider;
};