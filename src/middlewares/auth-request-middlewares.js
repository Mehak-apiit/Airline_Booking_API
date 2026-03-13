import { StatusCodes } from "http-status-codes";
import {errorResponseBody} from '../utils/common';
import { error } from "winston";
function validateAuthRequest(req,res,next) {
    if(!req.body.email){
        errorResponseBody.message = 'Something went wrong while authenticating user';
        errorResponseBody.error = 'Email is required';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponseBody);
    }
    if(!req.body.password){
        errorResponseBody.message = 'Something went wrong while authenticating user';
        errorResponseBody.error = 'Password is required';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponseBody);
    }
    next();
}
export default validateAuthRequest;