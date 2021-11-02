import express from 'express';
const router = express.Router()

import {getContacts} from '../controllers/chat.js';

router.get("/contacts/:id",(getContacts));

export default router;