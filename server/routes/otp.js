import express from 'express';
import { generate } from 'otp-generator';
import { generateOTP } from '../middleware/otp_generation.js';
const router = express.Router()

import { verifyOTP } from '../controllers/otp_verification.js';
import { sendOTP } from '../controllers/get_otp.js';

router.post("/get",generateOTP,sendOTP)
router.post("/verify",verifyOTP);

export default router;