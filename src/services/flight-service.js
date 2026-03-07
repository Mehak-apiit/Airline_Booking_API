import { StatusCodes } from 'http-status-codes';
import FlightRepository from '../repositories/flight-repository.js';
import FlightRespository from '../repositories/flight-repository.js';
const flightRepository = new FlightRespository;
class FlightService {
    async createFlightService(data) {
        try {
            const flight = await flightRepository.create(data);
            return flight;
        } catch (error) {
            {
            if(error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                return res.Status(StatusCodes.BAD_REQUEST).json({message: 'Validation error'});
            }
            return res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Can not create flight'});
        }
        }

    };
    


}
export default FlightService;
