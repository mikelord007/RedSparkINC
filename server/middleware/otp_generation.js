import OTP from "../models/OTP.js";
import AES from "crypto-js/aes.js";
import otpGenerator from "otp-generator";

const AddMinutesToDate = (date, minutes) => {
  return new Date(date.getTime() + minutes*60000);
}

export const generateOTP = async (req,res,next) => {
    const {email} = req.body;
    if(!email) return res.status(400).send('no email')
    //Generate OTP 
    const otp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
    const now = new Date();
    const expiration_time = AddMinutesToDate(now,10);
    
  
    //Create OTP instance in DB
    const otp_instance = new OTP({
      otp: otp,
      expiration_time: expiration_time
    });
    const otpSaved = await otp_instance.save();

    // Create details object containing the email and otp id
    const  details={
      "timestamp": now, 
      "check": email,
      "success": true,
      "message":"OTP sent to user",
      "otp_id": otpSaved._id
    }
    const details_string = JSON.stringify(details);
    // Encrypt the details object
    // const encoded= await encode(JSON.stringify(details));
    const encoded = AES.encrypt(details_string, process.env.SECRET);
    res.locals.otp = otp;
    res.locals.encoded = encoded;
    console.log(otp) //remove this in production
    next();
    
}