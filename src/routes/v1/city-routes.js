import express from 'express';
const router = express.Router();
import CityController from '../../controllers/airplane-controller.js';
const cityController = new CityController();
// /api/v1/airplanes POST
// http://localhost:3000/api/v1/airplane
router.post('/', CityController.createCityController);//******************/\
//Routes


export default router;