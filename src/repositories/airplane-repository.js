import CrudRepository from './crud-repository.js';
import db from '../models/index.js';
const { Airplane } = db;
class AirplaneRespository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}
export default AirplaneRespository;