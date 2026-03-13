import express from 'express';
import v1Route from './v1/index.js';
import userRouter from './user-routes.js';
import UserController from '../controllers/user-controller.js';
const router = express.Router();
import { EmailController } from '../controllers/index.js';
// http://localhost:3000/api/v1
router.use('/v1',v1Route);
router.post('/signup',UserController.signup);
router.post('/signin',UserController.sigin);
router.post('/email',EmailController.create);
router.post('/tickets',EmailController.create);
export default router;