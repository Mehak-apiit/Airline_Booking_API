import { StatusCodes } from "http-status-codes";
import CityService from '../services/airplane-service.js';
import {successResponseBody, errorResponseBody} from '../utils/response-body.js';
const cityService = new City();
import { model } from "mongoose";
import { response } from "express"
class CityController {
    async createCityController(req, res) {
        try {
            const city = await CityService.createCityService({
                name: req.body.name;
            });
            successResponseBody.data =city;
            return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully create a city',
                    data: city,
                    error: {}
                })
        } catch (error) {
            console.log(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating airplane',
                    data: {},
                    error: error
                })

        }
    }
}
export default CityController;
