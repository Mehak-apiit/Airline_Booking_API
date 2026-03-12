import { StatusCodes } from "http-status-codes";
import UserService from '../services/user-service.js';
import {successResponseBody, errorResponseBody} from '../utils/response-body.js';
const airportService = new AirportService();
class UserController {
    async sigin(req, res) {
        try {
            const user = await UserService.sigin({
                email: req.body.email,
                password: req.body.password
            });
            successResponseBody.data = user;
            return res
                .status(StatusCodes.CREATED)
                .json(successResponseBody);
        } catch (error) {
            errorResponseBody.err = error
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating the user',
                    data: {},
                    error: error
                })

        }
    };
     
    
     
}
export default UserController;
