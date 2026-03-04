import { StatusCodes } from "http-status-codes";
import AirplaneService from '../services/airplane-service.js';
import {successResponseBody, errorResponseBody} from '../utils/response-body.js';
const airplaneService = new AirplaneService();
import { model } from "mongoose";
import { response } from "express"
class AirplaneController {
    async createController(req, res) {
        try {
            const airplane = await airplaneService.createService({
                modelNumber: req.body.modelNumber,
                capacity: req.body.capacity
            });
            return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully create an airplane',
                    data: airplane,
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
    };
    async getAirplanes(req, res) {
        try {
            const airplanes = await airplaneService.getAirplanesService();
            successResponseBody.data = airplanes;
            return res
                .status(StatusCodes.OK)
                .json(successResponseBody);
        } catch (error) {
            errorResponseBody.error = error;
            return res
                .status(error.StatusCodes)
                .json(errorResponseBody);
        }
    };
}
export default AirplaneController;
