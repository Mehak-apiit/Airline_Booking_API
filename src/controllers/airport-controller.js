import { StatusCodes } from "http-status-codes";
import AirportService from '../services/airport-service.js';
import {successResponseBody, errorResponseBody} from '../utils/response-body.js';
const airportService = new AirportService();
class AirportController {
    async createAirportController(req, res) {
        try {
            const airport = await airportService.createAirportService({
                name: req.body.name,
                code: req.body.code,
                cityId: req.body.cityId
            });
            successResponseBody.data = airport;
            return res
                .status(StatusCodes.CREATED)
                .json(successResponseBody);
        } catch (error) {
            errorResponseBody.err = error
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating airport',
                    data: {},
                    error: error
                })

        }
    };
    async getAirports(req,res) {
        try {
            const airports = await airportService.getAirportService();
            successResponseBody.data = airports;
            return res
                .status(StatusCodes.OK)
                .json(successResponseBody);
        } catch (error) {
            errorResponseBody.error = error;
            throw error;
        }
    };
    async getAirport(req, res) {
        try {
            const airports = await airportService.getAirportsService(req.params.id);
            successResponseBody.data = airplanes;
            return res
                .status(StatusCodes.OK)
                .json(successResponseBody);
        } catch (error) {
            errorResponseBody.error = error;
            throw error;
        }
    };
     async destroyAirport(req, res) {
        try {
            const response = await airportService.destroyAirportService(req.params.id);
            successResponseBody.data = airplanes;
            return res
                .status(StatusCodes.OK)
                .json(successResponseBody);
        } catch (error) {
            errorResponseBody.error = error;
            throw error;
        }
    };
}
export default AirportController;
