'use strict';


import { Model, DataTypes } from 'sequelize';

export default function defineAirport(sequelize) {
  class Airport extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey: 'cityId',
      });
      this.hasMany(models.Flight, {
        foreignKey: 'departureAirportId',
        onDelete: 'CASCADE'
      });
      this.hasMany(models.Flight, {
        foreignKey: 'arrivalAirportId',
        onDelete: 'CASCADE'

      });
    }
  }
  Airport.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    code: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
}

