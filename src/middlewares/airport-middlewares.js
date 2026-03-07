import { StatusCodes } from "http-status-codes";
import { errorResponseBody } from '../utils/response-body.js';
function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        errorResponseBody.message = 'Something went wrong while creating airport';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    if (!req.body.code) {
        errorResponseBody.message = 'Something went wrong while creating airport';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    if (!req.body.cityId) {
        errorResponseBody.message = 'Something went wrong while creating airport';
        errorResponseBody.err = StatusCodes.NOT_FOUND;
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponseBody);
    }
    next();
}
export default validateCreateRequest;