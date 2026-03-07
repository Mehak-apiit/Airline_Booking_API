import express from 'express';
//import createAirplane from '../../controllers/index';
const router = express.Router();
import FlightController from '../../controllers/flight-controller.js';
import FlightMiddlewares from '../../middlewares';
import validateCreateRequest from '../../middlewares/city-middlewares.js';
const airplaneController = new AirplaneController();
// /api/v1/airplanes POST
// http://localhost:3000/api/v1/airplane
router.post('/',validateCreateRequest,airplaneController.createController);


export default router;