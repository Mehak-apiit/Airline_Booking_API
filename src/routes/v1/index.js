import express from 'express';
import airplaneRoutes from './airplane-routes.js';
import cityRoutes from './city-routes.js';
import airportRoutes from './airport-routes.js';
import flightRoutes from './flight-routes.js';
import bookingRoutes from './booking-routes.js';
import userRoutes from './user-routes.js';


const router = express.Router();
// http://localhost:3000/api/v1/
router.use('/airplane', airplaneRoutes);
router.use('/city', cityRoutes);
router.use('/airports',airportRoutes);
router.use('/flights', flightRoutes);
router.use('/booking', bookingRoutes);
router.use('/auth', userRoutes);

export default router;