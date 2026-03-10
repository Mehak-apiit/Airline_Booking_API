'use strict';

import { Model, DataTypes } from 'sequelize';
import { BOOKING_STATUS } from '../utils/common/enum.js';
const { BOOKED, CANCELLED, INITIATED, PENDING } = BOOKING_STATUS;

export default function defineBooking(sequelize) {
  class Booking extends Model {
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    flightId: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: [BOOKED, CANCELLED, INITIATED, PENDING],
      defaultValue: INITIATED,
      allowNull: false
    },
    noOfSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    totalCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
}


