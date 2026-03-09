import express from 'express';
//import createAirplane from '../../controllers/index';
const router = express.Router();
import AirportController from '../../controllers/airport-controller.js';
import validateCreateRequest from '../../middlewares/airport-middlewares.js';

const airportController = new AirportController();
// /api/v1/airplanes POST
// http://localhost:3000/api/v1/
router.post('/', validateCreateRequest,airportController.createAirportController);
router.get('/', airportController.getAirports);
router.get('/:id', airportController.getAirport);
router.delete('/:id', airportController.destroyAirport);

export default router;