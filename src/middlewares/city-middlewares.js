import { StatusCodes } from "http-status-codes";
import {successResponseBody, errorResponseBody} from '../utils/response-body.js';
function validateCreateRequest(req,res,next){
    if(!req.body.name){
        errorResponseBody.message = 'Something went wrong while creating city';
        errorResponseBody.error = StatusCodes.NOT_FOUND;
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(errorResponseBody);
    }
    next();
}
export default validateCreateRequest;