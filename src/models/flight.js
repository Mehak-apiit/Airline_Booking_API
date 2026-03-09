'use strict'
import { Model, DataTypes } from 'sequelize';

export default function defineFlight(sequelize) {
  class Flight extends Model {
    static associate(models) {
      //define association here
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId'

      });
      this.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId'

      });
      this.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId'
      });
    }
  }
  Flight.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalAirportId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boradingGate: {
      type: DataTypes.STRING
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
}

