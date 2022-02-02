import express from 'express';
const router = express.Router()

import { closeListing , getTradeHist } from '../controllers/trade.js';

router.post("/close-deal", closeListing);
router.get("/trade-history",getTradeHist);

export default router;