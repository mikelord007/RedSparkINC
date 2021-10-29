import express from 'express';
const router = express.Router()

import { createListing } from '../controllers/listings.js';

router.post("/create-listing", createListing);


export default router;