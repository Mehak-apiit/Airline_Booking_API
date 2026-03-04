'use strict';

import { Model, DataTypes } from 'sequelize';

export default function defineAirplane(sequelize) {
  class Airplane extends Model {
    static associate(models) {
    }
  }
  Airplane.init({
    modelNumber: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
}

