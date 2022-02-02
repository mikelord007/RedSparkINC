import CryptoJS from "crypto-js";
import OTP from "../models/OTP.js";
import User from "../models/User.js";
var dates = {
  convert:function(d) {
      // Converts the date in d to a date-object. The input can be:
      //   a date object: returned without modification
      //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
      //   a number     : Interpreted as number of milliseconds
      //                  since 1 Jan 1970 (a timestamp) 
      //   a string     : Any format supported by the javascript engine, like
      //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
      //  an object     : Interpreted as an object with year, month and date
      //                  attributes.  **NOTE** month is 0-11.
      return (
          d.constructor === Date ? d :
          d.constructor === Array ? new Date(d[0],d[1],d[2]) :
          d.constructor === Number ? new Date(d) :
          d.constructor === String ? new Date(d) :
          typeof d === "object" ? new Date(d.year,d.month,d.date) :
          NaN
      );
  },
  compare:function(a,b) {
      // Compare two dates (could be of any type supported by the convert
      // function above) and returns:
      //  -1 : if a < b
      //   0 : if a = b
      //   1 : if a > b
      // NaN : if a or b is an illegal date
      return (
          isFinite(a=this.convert(a).valueOf()) &&
          isFinite(b=this.convert(b).valueOf()) ?
          (a>b)-(a<b) :
          NaN
      );
  },
  inRange:function(d,start,end) {
      // Checks if date in d is between dates in start and end.
      // Returns a boolean or NaN:
      //    true  : if d is between start and end (inclusive)
      //    false : if d is before start or after end
      //    NaN   : if one or more of the dates is illegal.
     return (
          isFinite(d=this.convert(d).valueOf()) &&
          isFinite(start=this.convert(start).valueOf()) &&
          isFinite(end=this.convert(end).valueOf()) ?
          start <= d && d <= end :
          NaN
      );
  }
}

export const verifyOTP = async (req, res) => {
  try {
    console.log(req.body)
    var currentdate = new Date();
    const { verification_key, otp , check, type} = req.body;
    if (!verification_key) {
      const response = { "Status": "Failure", "Details": "Verification Key not provided", "erMsg":"Something went wrong, please try again" }
      throw response;
    }
    if (!otp) {
      const response = { "Status": "Failure", "Details": "OTP not Provided" , "erMsg":"OTP missing" }
      throw response;
    }
    if (!check) {
      const response = { "Status": "Failure", "Details": "Check not Provided", "erMsg":"Something went wrong, please try again" }
      throw response;
    }

    let decoded;
    //Check if verification key is altered or not and store it in variable decoded after decryption
    try {
      decoded = CryptoJS.AES.decrypt(verification_key,process.env.SECRET);
    }
    catch (err) {
      const response = { "Status": "Failure", "Details": "Request Error" , "erMsg":"Something went wrong, please try again"}
      throw response;
    }
    var obj = JSON.parse(decoded.toString(CryptoJS.enc.Utf8))
    const check_obj = obj.check
    console.log(check_obj)
    console.log(check)
    // Check if the OTP was meant for the same email or phone number for which it is being verified 
    if (check_obj != check) {
      const response = { "Status": "Failure", "Details": "OTP was not sent to this particular email or phone number", "erMsg":"Something went wrong, please try again" }
      throw response;
    }

    const otp_instance = await OTP.findOne({ _id: obj.otp_id })

    //Check if OTP is available in the DB
    if (otp_instance != null) {
      //Check if OTP is already used or not
      if (otp_instance.verified != true) {

        //Check if OTP is expired or not
        if (dates.compare(otp_instance.expiration_time,currentdate) == 1) {

          //Check if OTP is equal to the OTP in the DB
          if (otp === otp_instance.otp) {
            // Mark OTP as verified or used
            otp_instance.verified = true;
            otp_instance.updated_at = new Date();
            otp_instance.save();
            switch (type) {
              case "VERIFICATION":
                const updateUser = await User.findOne({email:check})
                updateUser.verified = true;
                updateUser.save();
                console.log(updateUser)
                break;
              case "RESET":
                break;
              default:
                break;
            }
            const response = { "Status": "Success", "Details": "OTP Matched", "check": check, "type":type }
            console.log(response)
            return res.status(200).send(response)
          }
          else {
            const response = { "Status": "Failure", "Details": "OTP did not Match", "erMsg":"OTP did not match" }
            throw response
          }
        }
        else {
          const response = { "Status": "Failure", "Details": "OTP Expired" , "erMsg":"Request timed out, please try again"}
          throw response;
        }
      }
      else {
        const response = { "Status": "Failure", "Details": "OTP Already Used", "erMsg":"Something went wrong, please try again" }
        throw response;
      }
    }
    else {
      const response = { "Status": "Failure", "Details": "OTP not in DB", "erMsg":"Something went wrong, please try again" }
      throw response;
    }
  } catch (err) {
    return res.status(400).send(err)
  }
}