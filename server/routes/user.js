import express from 'express';
const router = express.Router()

import {loginUser, registerUser, resetPassword} from '../controllers/auth.js';
import {verifyOTP} from '../middleware/otp_verification.js';
import {registerValidation} from '../middleware/validation.js';

router.post("/signup",registerValidation,registerUser);
router.post("/login", loginUser);
router.post("/reset-password",resetPassword);


export default router;