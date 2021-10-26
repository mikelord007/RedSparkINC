import express from 'express';
const router = express.Router()

import {loginUser, registerUser} from '../controllers/auth.js';

router.post("/signup",registerUser);
router.post("/login", loginUser);

export default router;