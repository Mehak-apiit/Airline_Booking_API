import express from 'express';
import airplaneRoutes from './airplane-routes.js';
const router = express.Router();
// http://localhost:3000/api/v1/airplane
router.use('/airplane',airplaneRoutes);
export default router;