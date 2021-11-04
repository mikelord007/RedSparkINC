import listingModel from '../models/Listing.js';
import jwt from 'jsonwebtoken';
import Listing from '../models/Listing.js';
import User from '../models/User.js';
import Trade from '../models/Trade.js';
const secret = "test";

export const createTrade = async (req, res) => {
    const { listing_id, seller_id, buyer_id, rate } = req.body;

    try {
        const date =  new Date().toString();
        const trade = new Trade({
            listing: listing_id,
            buyer: buyer_id,
            seller:seller_id,
            rate: rate,
            date: date
        });
        const savedTrade = await trade.save();
        return res.status(201).json(savedTrade);
    }

    catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
        console.log(error);
    }
}

export const getTradeHist = async (req,res) => {
    try {
        const tradeHist = await Trade.find({$or:[{seller:req.user.id},{buyer:req.user.id}]}).limit(10);
        return res.status(200).json(tradeHist);
    } catch (error) {
        console.log(error)
    }
}