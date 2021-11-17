import listingModel from '../models/Listing.js';
import Listing from '../models/Listing.js';
import User from '../models/User.js';
import mongoose from 'mongoose';


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

export const userListing = async (req,res) => {
    const { id } = req.user
    try {
        var Objid = mongoose.Types.ObjectId(id);
        const listings = await Listing.find({'user.id': Objid})
        return res.status(200).json(listings);
    } catch (error) {
        console.log(error)
    }
}

export const addContact = async (req,res) => {
    const { id } = req.user
    const listing = req.body
    let contact;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id')

        const user = await User.findById(id)
        const existingContact = user.contacts.find((elem) => elem.id === listing.user.id)
        if(existingContact){
            existingContact.listingRef = listing._id;
            existingContact.listingOwner = false;
            contact = existingContact;
            user.contacts.map((elem) => elem.id===listing.user.id?existingContact:elem)
            // console.log("updatedRef: ")
        }
        else{
            const newContact = {id: listing.user.id, name: listing.user.name, listingRef: listing._id, listingOwner: false}
            contact = newContact;
            user.contacts.push(newContact)
            // console.log("newRef")
        }

        const updatedUser = await User.findByIdAndUpdate(id, user);

        return res.status(200).json(contact);
    } catch (error) {
        console.log(error)
    }
}


export const getCurrentListing = async (req,res) =>{
    const {lID} = req.params
    
    try {
        const data = await listingModel.findById(lID)
        return res.status(200).json(data);
    } catch(error) {
        console.log(error)
    }

}