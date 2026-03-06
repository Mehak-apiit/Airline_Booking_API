import express from 'express';
const router = express.Router();
import CityController from '../../controllers/city-controller.js';
import validateCreateRequest from '../../middlewares/city-middlewares.js';
const cityController = new CityController();
// /api/v1/city POST

router.post('/',
    // validateCreateRequest,
    cityController.createCityController);//******************/\
//Routes


export default router;