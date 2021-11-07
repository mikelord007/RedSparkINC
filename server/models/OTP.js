import mongoose from 'mongoose';
const otpSchema = mongoose.Schema(
    {
        otp: String,
        expiration_time: Date,
        verified:{type:Boolean,default:false},
        created_at:{type:Date,default:new Date()},
        updated_at: Date,
});

export default mongoose.model("OTP",otpSchema);