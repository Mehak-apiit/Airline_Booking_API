import { StatusCodes } from "http-status-codes";
//import {errorResponseBody} from '../utils/common/index.js';
import {errorResponseBody} from '../utils/response-body.js';
import {create,signinService,checkPasswordService,isAuthenticated} from '../services/index.js';
import winston from "winston";
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
async function checkAuth(req,res,next){
    try{
        const response  = UserService.isAuthenticated(req.headers['x-access-token']);
        if(response){
            req.user = response;
            next();
        }
    }catch(error){
        throw error;
    }
}
export {validateAuthRequest,checkAuth};