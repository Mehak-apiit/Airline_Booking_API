import { StatusCodes } from 'http-status-codes';
import AirportRepository from '../repositories/airport-repository.js';
const airportRepository = new AirportRepository();
class AirportService {
    async createAirportService(data) {
        try {
            const airplane = await airportRepository.create(data);
            return airplane;
        } catch (error){
            throw error;
            if(error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                return res.Status(StatusCodes.BAD_REQUEST).json({message: 'Validation error'});
            }
            return res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Can not create airport'});
        }
        
    };
    async getAirportsService() {
        try {
            const airports = await airportRepository.getAll();
            return airports;
        } catch (error) {
            //throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
            return res.Status(StatusCodes.NOT_FOUND).json({message: 'Cannot fetch data of all the airports'});
        }

    };
     async getAirportService(id) {
        try {
            const airport = await airportRepository.get(id);
            return airplane;
        } catch (error) {
            if(error.statuscode == StatusCodes.NOT_FOUND){
                return res.json({message: 'The airport you requested is not present'});
            }
            return res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Cannot fetch the data of all the aiports'});
        }

    };
     async destroyAirportService(id) {
        try {
            const response = await airportRepository.destroy(id);
            return response;
        } catch (error) {
            if(error.statuscode == StatusCodes.NOT_FOUND){
                return res.json({message: 'The airport you requested to delete is not present'});
            }
            return res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Cannot destroy the airport'});
        }

    };
    


}
export default AirportService;
