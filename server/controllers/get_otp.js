import nodemailer from "nodemailer";
export const sendOTP = async (req, res) => {

    // add email stuff here 
    // send otp to email
    const { email } = req.body;
    try {

        const email_subject = "OTP for Signing up!";
        const email_message = `Here's your OTP: ${res.locals.otp}`;
        // Create nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: `${process.env.EMAIL}`,
                pass: `${process.env.PASS}`
            },
            tls: {
                ciphers:'SSLv3'
            }
        });
        

        const mailOptions = {
            from: `"RedSparks Inc"<${process.env.EMAIL}>`,
            to: `${email}`,
            subject: email_subject,
            text: email_message,
        };

        transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log("Server is ready to take our messages");
            }});

        //Send Email
        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                return res.status(400).send({ "Status": "Failure", "Details": err });
            } else {
                return res.status(200).json({"Status":"Success",verification_key:res.locals.encoded.toString()});

            }
        });
    }
    catch (err) {
        const response = { "Status": "Failure", "Details": err.message }
        return res.status(400).send(response)
    }
}

// if(type){
//     if(type=="VERIFICATION"){
//       const {message, subject_mail} = require('../templates/email/email_verification');
//       email_message=message(otp)
//       email_subject=subject_mail
//     }
//     else if(type=="FORGET"){
//       const {message, subject_mail} = require('../templates/email/email_forget');
//       email_message=message(otp)
//       email_subject=subject_mail
//     }
//     else if(type=="2FA"){
//       const {message, subject_mail} = require('../templates/email/email_2FA');
//       email_message=message(otp)
//       email_subject=subject_mail
//     }
//     else{
//       const response={"Status":"Failure","Details":"Incorrect Type Provided"}
//       return res.status(400).send(response) 
//     }
//   }
