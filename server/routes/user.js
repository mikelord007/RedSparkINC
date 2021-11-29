import express from 'express';
const router = express.Router()

import {loginUser, registerUser, resetPassword} from '../controllers/auth.js';
import {verifyOTP} from '../middleware/otp_verification.js'


router.post("/signup",verifyOTP,registerUser);
router.post("/login", loginUser);
router.post("/reset-password",resetPassword);


export default router;