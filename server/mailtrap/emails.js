const { mailtrapClient , sender} = require("./mailtrap.config.js");
const {VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE , PASSWORD_RESET_SUCCESS_TEMPLATE} = require("../mailtrap/emailTemplates.js");

const sendVerificationEmail = async (email, verificationToken) => {

    const recipient = [{ email }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        });
        console.log("Email sent successfully", response);
    }
     catch (error) {
        console.error(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}


const sendWelcomeEmail = async(email, name) => {
    const recipient = [{email}];
    try{
       const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        template_uuid: "1cdfbad1-ade9-40ed-91e9-7cffc80edcb4",
        template_variables: {
            "name": name,
          },
       });
       console.log("Welcome Email sent successfully", response);
    } catch(error){
        res.status(400).json({ success: false, message: error.message });
    }
}

const sendPasswordResetEmail = async(email, resetURL) => {
    const recipient = [{email: email}];
 try{
   const response = await mailtrapClient.send({
    from: sender,
    to: recipient,
    subject:"Reset your password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    category: "Reset Password",
   })
   console.log("Password  Reset  Successfully", response);
 } catch(error){
    console.error(`Error reset password`, error);
    throw new Error(`Error sending reset passsword: ${error}`);
 }
}


const sendResetSuccessEmail = async(email) => {
const recipient = [ { email}];
try{
    const response = await mailtrapClient.send({
     from: sender,
     to: recipient,
     subject:"Password reset successful",
     html: PASSWORD_RESET_SUCCESS_TEMPLATE,
     category: " Password Reset",
    })
    console.log("Password  Reset  Successfully", response);
  } catch(error){
     console.error(`Error reset password`, error);
     throw new Error(`Error sending reset passsword: ${error}`);
  }
}


module.exports =  { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail,  sendResetSuccessEmail};