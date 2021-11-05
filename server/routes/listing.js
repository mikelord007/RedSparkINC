import express from 'express';
const router = express.Router()

import { createListing,getListings,userListing, addContact } from '../controllers/listings.js';

router.post("/create-listing", createListing);
router.get("/get-listings",getListings);
router.get("/user-listing/:id",userListing)
router.post("/add-contact",addContact)
export default router;