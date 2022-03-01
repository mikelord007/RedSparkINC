import CryptoJS from "crypto-js";
import OTP from "../models/OTP.js";

var dates = {
  convert: function (d) {
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
        d.constructor === Array ? new Date(d[0], d[1], d[2]) :
          d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
              typeof d === "object" ? new Date(d.year, d.month, d.date) :
                NaN
    );
  },
  compare: function (a, b) {
    // Compare two dates (could be of any type supported by the convert
    // function above) and returns:
    //  -1 : if a < b
    //   0 : if a = b
    //   1 : if a > b
    // NaN : if a or b is an illegal date
    return (
      isFinite(a = this.convert(a).valueOf()) &&
        isFinite(b = this.convert(b).valueOf()) ?
        (a > b) - (a < b) :
        NaN
    );
  },
  inRange: function (d, start, end) {
    // Checks if date in d is between dates in start and end.
    // Returns a boolean or NaN:
    //    true  : if d is between start and end (inclusive)
    //    false : if d is before start or after end
    //    NaN   : if one or more of the dates is illegal.
    return (
      isFinite(d = this.convert(d).valueOf()) &&
        isFinite(start = this.convert(start).valueOf()) &&
        isFinite(end = this.convert(end).valueOf()) ?
        start <= d && d <= end :
        NaN
    );
  }
}

export const verifyOTP = async (req, res, next) => {
  try {

    var currentdate = new Date();
    const { verification_key, otp } = req.body;
    const { otp_code, type } = otp

    const { email } = req.body.form;
    const check = email;
    if (!verification_key) {
      const response = { "Status": "Failure", "Details": "Verification Key not provided" }
      return res.status(400).send(response)
    }
    if (!otp) {
      const response = { "Status": "Failure", "Details": "otp_code not Provided" }
      return res.status(400).send(response)
    }
    if (!check) {
      const response = { "Status": "Failure", "Details": "Check not Provided" }
      return res.status(400).send(response)
    }

    let decoded;
    //Check if verification key is altered or not and store it in variable decoded after decryption
    try {
      decoded = CryptoJS.AES.decrypt(verification_key, process.env.SECRET);
    }
    catch (err) {
      const response = { "Status": "Failure", "Details": "Request" }
      return res.status(400).send(response);
    }
    var obj = JSON.parse(decoded.toString(CryptoJS.enc.Utf8))
    const check_obj = obj.check
    // Check if the OTP was meant for the same email or phone number for which it is being verified 
    if (check_obj != check) {

      const response = { "Status": "Failure", "Details": "OTP was not sent to this particular email or phone number" + `${check_obj} == ${check}` }
      return res.status(400).send(response)
    }

    const otp_instance = await OTP.findOne({ _id: obj.otp_id })

    //Check if OTP is available in the DB
    if (otp_instance != null) {
      //Check if OTP is already used or not
      if (otp_instance.verified == true) {

        //Check if OTP is expired or not
        if (dates.compare(otp_instance.expiration_time, currentdate) == 1) {

          //Check if OTP is equal to the OTP in the DB
          if (otp_code === otp_instance.otp) {
            // Mark OTP as verified or used

            otp_instance.verified = true;
            otp_instance.updated_at = new Date();
            otp_instance.save();
            // const response = { "Status": "Success", "Details": "OTP Matched", "Check": check }
            next();
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
      const response = { "Status": "Failure", "Details": "OTP not provided" }
      return res.status(400).send(response)
    }
  } catch (err) {
    const response = { "Status": "Failure", "Details": err.message }
    return res.status(400).send(response)
  }
}