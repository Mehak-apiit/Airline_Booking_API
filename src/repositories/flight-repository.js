import CrudRepository from './crud-repository.js';
import db from '../models/index.js';
const { Flight } = db;
class FlightRespository extends CrudRepository {
    constructor() {
        super(Flight);
    }
}
export default FlightRespository;