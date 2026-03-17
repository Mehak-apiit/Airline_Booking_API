import express from 'express';
import UserController from '../../controllers/user-controller.js';
import { validateAuthRequest, checkAuth } from '../../middlewares/index.js';
const ob = new UserController();

const router = express.Router();

//router.post("/signin", validateAuthRequest, UserController.signin);
router.post("/signin",validateAuthRequest,ob.register);
export default router;