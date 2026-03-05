import { StatusCodes } from 'http-status-codes';
import CityRepository from '../repositories/airplane-repository.js';
const cityRepository = new CityRepository();
class CityService {
    async createCityService(data) {
        try {
            const city = await cityRepository.create(data);
            return city;
        } catch (error) {
            if(error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                throw error;
            }
            throw {
                message: "Cannot create a new city oject",
                StatusCodes: StatusCodes.INTERNAL_SERVER_ERROR
            };
        }

    };
    

}
export default CityService;
