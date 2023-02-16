
const { getReasonPhrase } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { SMTPEMAIL, SMTPPASS } = require("../constants");


const sendResponse = (response, type, code, message, data = null,authtoken= null) => {
    response.status(code).json({
        status: type,
        code: code,
        statusMessage: getReasonPhrase(code),
        message: message,
        result: data,
        authtoken:authtoken
    })
}

const validationError = (errors) => {
    const errorMessage = errors.details[0].message;
    console.log("Validation Error = >", errorMessage);
    return errorMessage;
}

const generatePassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    
    const bcrypted_password = await bcrypt.hash(password, salt);
    return bcrypted_password;
}
const isPasswordMatched = async (actualPassword, password) => {
    const isMatched = await bcrypt.compare(password, actualPassword);
  
    return isMatched;
}

const sendResetPasswordMail = async(name,email,token)=>{
   const transporter = nodemailer.createTransport({
        service: "gmail",
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:SMTPEMAIL,
            pass:SMTPPASS
        }
    });

    const mailOptions ={
        from:SMTPEMAIL,
        to:email,
        subject:"Reset Password",
        html:'<p>HI '+name+' You requested password resetting click on the following link to proceed<br></p><a href ="http://localhost:4000/api/user/reset-password?token='+token+'">reset your password</a>'


    }
    transporter.sendMail(mailOptions,function(error,info){

        if(error){
            console.log(error);

        }
        else{
            
            console.log("Mail Sent",info.response);
        }
    });

}


module.exports ={ validationError, sendResponse,generatePassword,isPasswordMatched,sendResetPasswordMail}