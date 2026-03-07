import { StatusCodes } from "http-status-codes";
import FlightService from '../services/flight-service.js';
import {successResponseBody, errorResponseBody} from '../utils/response-body.js';
const flightService = new FlightService();
import { model } from "mongoose";
import { response } from "express"
class FlightController {
    async createFlight(req, res) {
        try {
            const flight = await flightService.create({
                flightNumber: req.body.flightNumber,
                airpalneId: req.body.airpalneId,
                departureAirpotId: req.body.departureAirpotId,
                arrivalAirpotId: req.body.arrivalAirpotId,
                arrivalTime: req.body.arrivalTime,
                departureTime: req.body.departureTime,
                price:req.body.price,
                boardingGate: req.body.boardingGate,
                totalSeats: req.body.totalSeats


            });
            successResponseBody.data = flight;
            return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully create a flight',
                    data: airplane,
                    error: {}
                })
        } catch (error) {
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
    async getAllFlights(req,res) {
        try {
            const flights = await FlightService.getAllFlights(req.query);
            successResponseBody.data = flight;
            return res
                     .status(StatusCodes.CREATED)
                     .json(successResponseBody);

        }catch(error){
            errorResponseBody.err = error;
            throw error;

        }
    }
   
}
export default FlightController;
