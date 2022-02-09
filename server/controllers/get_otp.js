import nodemailer from "nodemailer";
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { logo } from "../templates/logo.js";


export const sendOTP = async (req, res) => {

    // add email stuff here 
    // send otp to email
    const { email } = req.body;
    const type = req.body.type ? req.body.type : res.locals.type;
    try {

        const __filename = fileURLToPath(import.meta.url);

        const __dirname = path.dirname(__filename);
        let subject;
        let email_message;
        let heading;

        if (!type) {
            const response = { "Status": "Failure", "Details": "Type not provided", "erMsg": "Something went wrong, please try again" }
            console.log(response)
            return res.status(400).send(response)
        }
        const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../templates/index.hbs"), "utf8");

        console.log(type)
        if (type) {
            if (type === 'VERIFICATION') {
                subject = "Here's your otp";
                email_message = `we're excited to have you get started.`;
                heading = "Welcome!";
            }
            if (type === 'RESET') {
                subject = "OTP for reseting your password";
                email_message = `forgot your password? No worries, we got you.`;
                heading = "Hey there!";
            }
            if (type === 'VERIFICATION_PENDING') {
                subject = "OTP for verification";
                email_message = `Your verification is pending.`;
                heading = "Welcome!";
            }
        }
        const img_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR4XmNgAAIAAAUAAQYUdaMAAAAASUVORK5CYII=";

        const template = handlebars.compile(emailTemplateSource);
        const htmlToSend = template({
            user: "RedSpark member",
            message: email_message,
            otp: res.locals.otp,
            img_1:img_1,
            logo:logo
        });
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
                ciphers: 'SSLv3'
            }
        });

        const mailOptions = {
            from: `"RedSparks Inc"<${process.env.EMAIL}>`,
            to: `${email}`,
            subject: subject,
            html: htmlToSend
        };

        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        // Send Email
        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                return res.status(400).send({ "Status": "Failure", "Details": err });
            } else {
                return res.status(200).json({ "Status": "Success", verification_key: res.locals.encoded.toString() });
            }
        });
        return res.status(200).json({ "Status": "Success", verification_key: res.locals.encoded.toString() });
    }
    catch (err) {
        const response = { "Status": "Failure", "Details": err.message, "erMsg": "Something went wrong, please try again" }
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
