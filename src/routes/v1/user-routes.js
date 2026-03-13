import express from 'express';
import UserController from '../../controllers/user-controller.js';
import {AuthRequestMiddlewares} from '../../middlewares';
const router = express.Router();
router.post('/signup',AuthRequestMiddlewares.validateAuthRequest,UserController.signup);
router.post('/signin',AuthRequestMiddlewares.validateAuthRequest,UserController.signin);
export default router;