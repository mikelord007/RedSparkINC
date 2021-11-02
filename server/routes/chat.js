import express from 'express';
const router = express.Router()

import {getContacts,getChat} from '../controllers/chat.js';

router.get("/getContacts/:id",(getContacts));
router.get("/getChat/:uid",getChat)

export default router;