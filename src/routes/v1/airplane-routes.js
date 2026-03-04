import express from 'express';
//import createAirplane from '../../controllers/index';
const router = express.Router();
import AirplaneController from '../../controllers/airplane-controller.js';
const airplaneController = new AirplaneController();
// /api/v1/airplanes POST
// http://localhost:3000/api/v1/airplane
router.post('/', airplaneController.createController);
router.get('/', airplaneController.getAirplanes);

export default router;