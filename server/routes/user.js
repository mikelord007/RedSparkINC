import express from 'express';
const router = express.Router()

import {registerUser} from '../controllers/auth.js';

router.post("/signup",registerUser);
// router.post("/login", login);

export default router;