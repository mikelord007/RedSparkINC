import listingModel from '../models/Listing.js';
import jwt from 'jsonwebtoken';
const secret = "test";

export const createListing = async (req, res) => {
    const { currency, rate, amount, burner, minP, maxP, active, created } = req.body;

    try {
        console.log(req.user.id);
        console.log(req.body);

        const createdDate = new Date().toString()

        const listing = new listingModel({
            currency: currency,
            rate: rate,
            amount: amount,
            burner: burner,
            minP: minP,
            active: true,
            created: createdDate,
            user: req.user.id
        });
        console.log(listing)
        const savedListing  = await listing.save();
        console.log(savedListing)
        // return res.status(201).json({ savedListing })

    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again" });
        console.log(error);
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