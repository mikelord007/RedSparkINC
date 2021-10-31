import express from 'express';
const router = express.Router()

import { createTrade, getTradeHist } from '../controllers/trade.js';

router.post("/create-trade", createTrade);
router.get("/trade-history",getTradeHist);

export default router;