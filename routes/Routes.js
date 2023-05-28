import express from 'express';
import { register, registerGoogle } from '../controllers/User.js';

const router = express.Router();

// Route untuk register user
router.post('/register', register);

// Route untuk register user menggunakan email Google
router.post('/register-google', registerGoogle);

export default router;
