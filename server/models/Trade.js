import mongoose from 'mongoose';

const tradeSchema = mongoose.Schema( 
{
    seller:mongoose.ObjectId,
    buyer:mongoose.ObjectId,
    listing:mongoose.ObjectId,
    rate:mongoose.Number, 
    date:Date 
}) 


export default mongoose.model("Trade", tradeSchema)