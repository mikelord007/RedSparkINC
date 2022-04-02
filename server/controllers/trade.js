import Trade from '../models/Trade.js';
import Listing from '../models/Listing.js';
import userModel from '../models/User.js'
import mongoose from 'mongoose';
const secret = "test";


export const closeListing = async(req, res) => {
    const listing = req.body.listing
    const recipient = req.body.recipient
    const {id} = req.user

    try
    {   const newTrade = {
            seller: mongoose.Types.ObjectId(listing.user.id),
            buyer: mongoose.Types.ObjectId(recipient.id),
            listing: listing._id,
            currency: listing.currency,
            rate: listing.rate,
            amount: listing.amount,
            burner: listing.burner,
            minP: listing.minP,
            maxP: listing.maxP,
            created: Date(),
            sellerName: listing.user.name,
            buyerName: recipient.name
        }

        const trade = new Trade(newTrade)
        const savedTrade = await trade.save()

        listing.active = false
        await Listing.findByIdAndUpdate(listing._id, listing)

        return res.status(200).json(savedTrade)
    }
    catch(error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
        console.log(error)
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