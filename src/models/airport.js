'use strict';

import { Model, DataTypes } from 'sequelize';

export default function defineAirport(sequelize) {
  class Airplane extends Model {
    static associate(models) {
    }
  }
  Airplane.init({
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
    modelName: 'Airplane',
  });
  return Airplane;
}

