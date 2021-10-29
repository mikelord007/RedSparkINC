import express from 'express';
const router = express.Router()

import { createListing,getListings } from '../controllers/listings.js';

router.post("/create-listing", createListing);
router.get("/get-listings",getListings);

export default router;