
import { inspect } from 'util' ;
export const sendOTP = async (req, res) => {

    // add email stuff here 
    // send otp to email

    // return verif key to react
    return res.status(200).json({verification_key:res.locals.encoded.toString()});

}