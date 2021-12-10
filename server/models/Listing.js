import mongoose from 'mongoose';

const listingSchema = mongoose.Schema( 
{
        currency: String,
        rate: Number,
        amount: Number,
        burner: String,
        minP: Number,
        maxP: Number,
        active: Boolean,
        created: Date,
        user: {
            name: String,
            id: mongoose.Schema.Types.ObjectId
        }
    }
)

export default mongoose.model("Listing", listingSchema)