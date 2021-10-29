import listingModel from '../models/Listing.js';
import jwt from 'jsonwebtoken';
import Listing from '../models/Listing.js';
import User from '../models/User.js';
const secret = "test";

export const createListing = async (req, res) => {
    const { currency, rate, amount, burner, minP, maxP } = req.body;

    try {
        const createdDate = new Date().toString();
        const user = await User.findById(req.user.id)
        console.log(user.name)
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
        console.log(listing)
        const savedListing  = await listing.save();
        // console.log(savedListing);
        // console.log('success')
        // return res.status(201).json({ savedListing })

    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
        console.log(error);
    }
}

export const getListings = async (req,res) => {
    try {
        const listings = await Listing.find({}).limit(10);
        console.log(listings);
        return res.status(200).json(listings);
    } catch (error) {
        console.log(error)
    }
}

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']
    // console.log(authHeader)
    // const token = authHeader && authHeader.split(' ')[1]
    // if (token == null) return res.sendStatus(401)
    if (token == null) return console.log('user not auth')

    jwt.verify(token, process.env.SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}