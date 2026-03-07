import CrudRepository from './crud-repository.js';
import db from '../models/index.js';
const { Flight } = db;
class FlightRespository extends CrudRepository {
    constructor() {
        super(Flight);
    }
    async getAllFlights(filter,sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort
        });
        return response;
    }
}
export default FlightRespository;