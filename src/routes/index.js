import express from 'express';
import v1Route from './v1/index.js';
import userRouter from './user-routes.js';
import UserController from '../controllers/user-controller.js';
const router = express.Router();
// http://localhost:3000/api/v1
router.use('/v1',v1Route);
router.post('/signup',UserController.signup);
router.post('/signin',UserController.sigin);
export default router;