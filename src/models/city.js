'use strict';
import { Model, DataTypes } from 'sequelize';
export default function defineCity(sequelize) {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Airport,{
        foreignKey: 'cityId'
      })
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};