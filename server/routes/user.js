import express from 'express';
const router = express.Router()

import {loginUser, registerUser} from '../controllers/auth.js';
import {verifyOTP} from '../middleware/otp_verification.js'

// router.post("/password-reset",passwordReset)
router.post("/signup",verifyOTP,registerUser);
router.post("/login", loginUser);

export default router;