import createBookingService from '../services/booking-service.js';
import { StatusCodes } from 'http-status-codes';
import {successResponseBody, errorResponseBody} from '../utils/response-body.js';
async function createBooking(req, res){
    try{
        console.log("body", req.body);
        const response = await BookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noOfSeats: req.body.noOfSeats
        });
        successResponseBody.data = response;
        return res.status(StatusCodes.OK).json(successResponseBody);
        
    }catch(error){
        errorResponseBody.message = error.message;
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponseBody);
    }
}
export default createBooking;