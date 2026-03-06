'use strict';

import { Model, DataTypes } from 'sequelize';

export default function defineAirplane(sequelize) {
  class Airplane extends Model {
    static associate(models) {
      this.hasMany(models.Flight,{
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE'
      });
    }
  }
  Airplane.init({
    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
}

