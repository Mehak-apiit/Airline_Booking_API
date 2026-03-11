import CrudRepository from './crud-repository.js';
import db from '../models/index.js';
import { Sequelize } from 'sequelize';
import {Flight,Airplane,Aiirport,City} from '../models/index.js';
import db from '../models/index.js';
import addRowLockOnFlights from './queries.js';
const { Flight } = db;
class FlightRespository extends CrudRepository {
    constructor() {
        super(Flight);
    }
    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort
        });
        return response;
    };
    async updateRemainingSeats(flightId, seats, dec = true) {
        await db.sequelize.query(addRowLockOnFlights(flightId));
        const flight = await Flight.findByPk(flightId);
        if (+dec) {
            await flight.decrement('totalSeats', {
                by: seats
            });
        } else {
            await flight.increment('totalSeats', { by: seats });
            
        }
        return flight;
    }
}
export default FlightRespository;