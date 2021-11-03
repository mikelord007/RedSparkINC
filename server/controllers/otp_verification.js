import CryptoJS from "crypto-js";
import OTP from "../models/OTP.js";

export const verifyOTP = async (req, res) => {
 
  try {
 
    var currentdate = new Date();
    const { verification_key, otp, check } = req.body;
   console.log("hello")
    if (!verification_key) {
      const response = { "Status": "Failure", "Details": "Verification Key not provided" }
      return res.status(400).send(response)
    }
    if (!otp) {
      const response = { "Status": "Failure", "Details": "OTP not Provided" }
      return res.status(400).send(response)
    }
    if (!check) {
      const response = { "Status": "Failure", "Details": "Check not Provided" }
      return res.status(400).send(response)
    }

    let decoded;

    //Check if verification key is altered or not and store it in variable decoded after decryption
    try {
      decoded = CryptoJS.AES.decrypt(verification_key,process.env.SECRET);
    }
    catch (err) {
      const response = { "Status": "Failure", "Details": "Bad Request" }
      return res.status(400).send(response);
    }
    var obj = JSON.parse(decoded.toString(CryptoJS.enc.Utf8))
    const check_obj = obj.check
    // Check if the OTP was meant for the same email or phone number for which it is being verified 
    if (check_obj != check) {
      const response = { "Status": "Failure", "Details": "OTP was not sent to this particular email or phone number" }
      return res.status(400).send(response)
    }

    const otp_instance = await OTP.findOne({ _id: obj.otp_id })

    //Check if OTP is available in the DB
    if (otp_instance != null) {
      //Check if OTP is already used or not
      if (otp_instance.verified != true) {

        //Check if OTP is expired or not
        if (otp_instance.expiration_time < currentdate) {

          //Check if OTP is equal to the OTP in the DB
          if (otp === otp_instance.otp) {
            // Mark OTP as verified or used
            otp_instance.verified = true;
            otp_instance.updated_at = new Date();
            otp_instance.save();
            
            const response = { "Status": "Success", "Details": "OTP Matched", "Check": check }
            return res.status(200).send(response)
          }
          else {
            const response = { "Status": "Failure", "Details": "OTP NOT Matched" }
            return res.status(400).send(response)
          }
        }
        else {
          const response = { "Status": "Failure", "Details": "OTP Expired" }
          return res.status(400).send(response)
        }
      }
      else {
        const response = { "Status": "Failure", "Details": "OTP Already Used" }
        return res.status(400).send(response)
      }
    }
    else {
      const response = { "Status": "Failure", "Details": "Bad Request" }
      return res.status(400).send(response)
    }
  } catch (err) {
    const response = { "Status": "Failure", "Details": err.message }
    return res.status(400).send(response)
  }
}