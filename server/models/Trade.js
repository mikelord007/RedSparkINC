import mongoose from 'mongoose';

const tradeSchema = mongoose.Schema( 
{
    seller:mongoose.ObjectId,
    buyer:mongoose.ObjectId,
    listing:mongoose.ObjectId,
    currency: String,
    rate: Number,
    amount: Number,
    burner: String,
    minP: Number,
    maxP: Number,
    created: Date,
    sellerName: String,
    buyerName: String
})




export default mongoose.model("Trade", tradeSchema)