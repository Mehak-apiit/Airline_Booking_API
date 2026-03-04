import { StatusCodes } from 'http-status-codes';
import AirplaneRepository from '../repositories/airplane-repository.js';
const airplaneRepository = new AirplaneRepository();
class AirplaneService {
    async createService(data) {
        try {
            const airplane = await airplaneRepository.create(data);
            return airplane;
        } catch (error) {
            throw error;
        }

    };
    async getAirplanesService() {
        try {
            const airplanes = await airplaneRepository.getAll();
            return airplanes;
        } catch (error) {
            //throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
            throw error;
        }

    };


}
export default AirplaneService;
