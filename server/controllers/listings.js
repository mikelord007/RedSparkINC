import listingModel from '../models/Listing.js';

import Listing from '../models/Listing.js';
import User from '../models/User.js';
const secret = "test";

export const createListing = async (req, res) => {
    const { currency, rate, amount, burner, minP, maxP } = req.body;
    try {
        const createdDate = new Date().toString();
        const user = await User.findById(req.user.id)
        const listing = new listingModel({
            currency: currency,
            rate: rate,
            amount: amount,
            burner: burner,
            minP: minP,
            maxP:maxP,
            active: true,
            created: createdDate,
            user: {
                name:user.name,
                id:user._id
            }
        });
        const savedListing  = await listing.save();
        return res.status(201).json({ savedListing })

    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
        console.log(error);
    }
}

export const getListings = async (req,res) => {
    try {
        const listings = await Listing.find({}).limit(10);
        return res.status(200).json({listings});
    } catch (error) {
        console.log(error)
    }
}

