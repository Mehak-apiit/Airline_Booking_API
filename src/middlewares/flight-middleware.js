import { StatusCodes } from "http-status-codes";
import { errorResponseBody } from '../utils/response-body.js';
function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        errorResponseBody.message = 'Something went wrong while creating flight';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    if (!req.body.airplaneId) {
        errorResponseBody.message = 'Something went wrong while creating flight';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    if (!req.body.departureAirportId) {
        errorResponseBody.message = 'Something went wrong while creating flight';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    if (!req.body.arrivalTime) {
        errorResponseBody.message = 'Something went wrong while creating flight';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    if (!req.body.departureTime) {
        errorResponseBody.message = 'Something went wrong while creating flight';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    if (!req.body.price) {
        errorResponseBody.message = 'Something went wrong while creating flight';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    if (!req.body.totalSeats) {
        errorResponseBody.message = 'Something went wrong while creating flight';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    next();
}
export default validateCreateRequest;