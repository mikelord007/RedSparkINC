import listingModel from '../models/Listing.js';
import Listing from '../models/Listing.js';
import User from '../models/User.js';
import mongoose from 'mongoose';


const secret = "test";

export const createListing = async (req, res) => {
    const { currency, rate, amount, burner, minP, maxP } = req.body;
    try {
        const createdDate = new Date().toString();
        const user = req.user
        console.log(user)
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
                name:user.username,
                id:user.id
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
        const PAGE_SIZE = 10;
        const page = parseInt(req.query.page || "0");
        const type = req.query.type
        console.log(type)
        let total;
        if (type=="UPX"){
            total = await Listing.countDocuments({'currency': type})
        }
        else if(type=="FIAT"){
            total = await Listing.countDocuments({'currency': {$not: {$eq: 'UPX'}}})
        }
        else
        {
            total = await Listing.countDocuments({});
        }
        
        let listings
        if(type=="UPX"){
            listings = await Listing.find({'currency': "UPX"})
            .limit(PAGE_SIZE)
            .skip(PAGE_SIZE * page);
        }
        else if(type=="FIAT")
        {
            listings = await Listing.find({'currency': {$not: {$eq: 'UPX'}}})
            .limit(PAGE_SIZE)
            .skip(PAGE_SIZE * page);
        }
        else
        {
            listings = await Listing.find({})
            .limit(PAGE_SIZE)
            .skip(PAGE_SIZE * page);
        }

        return res.status(200).json({
            totalPages: Math.ceil(total/ PAGE_SIZE),
            listings
        });
    } catch (error) {
        console.log(error)
    }
}

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']
    // console.log(authHeader)
    // const token = authHeader && authHeader.split(' ')[1]
    // if (token == null) return res.sendStatus(401)
    if (token == null) return console.log('user not auth');

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

export const deleteUserListing = async( req,res) => {
    const {id} = req.user
    const {lID} = req.body
    try{
        const deletedListing = await Listing.findByIdAndDelete(lID)
        return res.status(200).json(deletedListing)
    } catch(error) {
        console.log(error)
    }
}

const addContactHelper = (user,listingID,listingOwner,userToAddID,userToAddName) => {
    let contact;
    const existingContact = user.contacts?.find((elem) => elem.id === userToAddID)
        if(existingContact){
            existingContact.listingRef = listingID;
            existingContact.listingOwner = listingOwner;
            contact = existingContact;
            user.contacts = user.contacts.map((elem) => elem.id===userToAddID?existingContact:elem)
        }
        
        else{
            const newContact = {id: userToAddID, name: userToAddName, listingRef: listingID, listingOwner: listingOwner, lastMessage: "", lastMsgTime: null}
            contact = newContact;
            user.contacts.push(newContact)

        }

        return [user,contact];

}


export const addContact = async (req,res) => {
    const { id,name } = req.user
    const listing = req.body

    try {

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id')

        const user = await User.findById(id)
        console.log("listing is: ", listing)
        const [userUpdated, contact] = addContactHelper(user,listing._id,false,listing.user.id,listing.user.name)

        await User.findByIdAndUpdate(id, userUpdated);

        const otherUser = await User.findById(listing.user.id);

        const [ otherUserUpdated, otherContact ] = addContactHelper(otherUser,listing._id,true,id,name);

        await User.findByIdAndUpdate(otherUser.id, otherUserUpdated);

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