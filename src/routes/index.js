import express from 'express';
import v1Route from './v1/index.js';
const router = express.Router();
// http://localhost:3000/api/v1
router.use('/v1',v1Route);
export default router;