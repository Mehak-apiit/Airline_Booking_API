import express from 'express';
import {BookingController} from '../../controllers/booking-controller.js';
import { deflate } from 'zlib';

const router = express.Router();
router.post(
    '/',
    BookingController.createBooking
)
export default router;