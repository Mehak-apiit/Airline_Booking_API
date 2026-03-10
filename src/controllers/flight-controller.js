import { StatusCodes } from "http-status-codes";
import FlightService from '../services/flight-service.js';
import { successResponseBody, errorResponseBody } from '../utils/response-body.js';
const flightService = new FlightService();
class FlightController {
    async createFlight(req, res) {
        try {
            console.log(req.body);
            const flight = await flightService.createFlightService({
                flightNumber: req.body.flightNumber,
                airplaneId: req.body.airplaneId,
                departureAirportId: req.body.departureAirportId,
                arrivalAirportId: req.body.arrivalAirportId,
                arrivalTime: req.body.arrivalTime,
                departureTime: req.body.departureTime,
                price: req.body.price,
                boardingGate: req.body.boradingGate,
                totalSeats: req.body.totalSeats


            });
            successResponseBody.data = flight;
            return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully create a flight',
                    data: flight,
                    error: {}
                })
        } catch (error) {
            console.log(error);
            errorResponseBody.error = error;
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating flight',
                    data: {},
                    error: error
                })

        }
    };
    async getAllFlights(req, res) {
        try {
            const flights = await flightService.getAllFlightsService(req.query);
            successResponseBody.data = flights;
            return res
                .status(StatusCodes.CREATED)
                .json(successResponseBody);

        } catch (error) {
            errorResponseBody.err = error;
            throw error;

        }
    };
    async getFlight(req,res){
        try{
            const flight = await flightService.getFlightService(req.params.id);
            successResponseBody.data = flight;
            return res
                     .status(StatusCodes.OK)
                     
        }catch(error){
            throw error;
        }
    }

}
export default FlightController;
