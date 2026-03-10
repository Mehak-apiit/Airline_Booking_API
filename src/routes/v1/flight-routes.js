import express from 'express';
//import createAirplane from '../../controllers/index';
const router = express.Router();
import FlightController from '../../controllers/flight-controller.js';

import validateCreateRequest from '../../middlewares/flight-middleware.js';
const flightController = new FlightController();
// /api/v1/airplanes POST
// http://localhost:3000/api/v1/airplane
router.post('/',flightController.createFlight);
router.get('/',
    flightController.getAllFlights
);
router.get('/:id',
    flightController.getFlight

);


export default router;