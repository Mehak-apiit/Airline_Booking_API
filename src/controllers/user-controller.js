import { StatusCodes } from "http-status-codes";
import { signinService } from '../services/index.js';
import { successResponseBody, errorResponseBody } from '../utils/response-body.js';
class UserController {
    async register(req, res) {
        try {
            const user = await signinService({
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
