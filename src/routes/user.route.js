import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginValidator, newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


router.post('/register', newUserValidator, userController.registerUser);
router.post('/login', loginValidator, userController.LoginUser);
router.get('/getallusers', userAuth, userController.getAllUsers);



export default router;
