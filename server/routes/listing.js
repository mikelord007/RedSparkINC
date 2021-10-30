import express from 'express';
const router = express.Router()

import { createListing,getListings,userListing } from '../controllers/listings.js';

router.post("/create-listing", createListing);
router.get("/get-listings",getListings);
router.get("/user-listing/:id",userListing)
export default router;