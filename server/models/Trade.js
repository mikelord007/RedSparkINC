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
    created: Date
})




export default mongoose.model("Trade", tradeSchema)