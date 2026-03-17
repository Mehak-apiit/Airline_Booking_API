import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import BookingRepository from '../repositories/booking-repository.js';
import { ServerConfig } from '../config/server-config.js';
import db from '../models/index.js';
async function createBookingService(data) {
    return new Promise((resolve, reject) => {
        const result = db.sequelize.transaction(async function bookingImpl(t) {
            const flight = await axios.get(`${ServerConfig.FLIGHT_SERVICE_URL}/api/v1/flight/${data.flightId}`);
            const flightData = flight.data.data;
            if (data.noOfSeats > flightData.totalSeats) {
                reject(error);
            }
            resolve(true);
        });
    })
}

export default createBookingService;