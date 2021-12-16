import express from 'express';
const router = express.Router()

import { createListing,getListings,userListing, addContact, getCurrentListing, deleteUserListing } from '../controllers/listings.js';
import { closeListing } from '../controllers/trade.js'

router.post("/create-listing", createListing);
router.get("/get-listings",getListings);
router.post("/del-user-lisitng",deleteUserListing);
router.get("/user-listing",userListing);
router.post("/add-contact",addContact);
router.get("/current-listing/:lID",getCurrentListing);
router.post("/close-deal/",closeListing);
export default router;