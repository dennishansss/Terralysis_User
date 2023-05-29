import express from 'express';
import { registerController, registerGoogleController  } from '../controllers/Register.js';
import { loginController, loginGoogleController } from '../controllers/Login.js';
import imageController from '../controllers/Image.js';
import upload from '../middleware/multer.js';

const router = express.Router();

// Route untuk register user
export const register = router.post('/register', registerController);

// Route untuk login user
export const login = router.post('/login', loginController);

// Route untuk upload image user
export const image = router.post('/image',upload.single('image'), imageController);

// Route untuk upload image as guest
export const imageGuest = router.post('/image/guest',upload.single('image'), imageController);

// Route untuk register user menggunakan email Google
export const registerGoogle = router.post('/register/google', registerGoogleController);

// Route untuk login user
export const loginGooge = router.post('/login/google', loginGoogleController);
