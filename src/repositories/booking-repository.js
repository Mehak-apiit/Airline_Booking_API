import CrudRepository from './crud-repository.js';
import db from '../models/index.js';
const { Booking } = db;
class BookingRespository extends CrudRepository {
    constructor() {
        super(Booking);
    }
}
export default BookingRespository;