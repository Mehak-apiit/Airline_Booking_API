import express from 'express';
import airplaneRoutes from './airplane-routes.js';
import cityRoutes from './city-routes.js';
import airportRoutes from './airport-routes.js';
const router = express.Router();
// http://localhost:3000/api/v1/airplane
router.use('/airplane', airplaneRoutes);
router.use('/city', cityRoutes);
router.use('/airports',airportRoutes);
export default router;