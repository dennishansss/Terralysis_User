import express from 'express';
import { register, registerGoogle } from '../controllers/Register.js';
import { login, loginGoogle } from '../controllers/Login.js';

const router = express.Router();

// Route untuk register user
router.post('/register', register);

// Route untuk login user
router.post('/login', login);

// Route untuk register user menggunakan email Google
router.post('/register/google', registerGoogle);

// Route untuk login user
router.post('/login/google', loginGoogle);

export default router;
