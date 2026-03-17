import express from 'express';
import createBooking from '../../controllers/booking-controller.js';
import { deflate } from 'zlib';

const router = express.Router();
router.post(
    '/',
    createBooking
)
export default router;