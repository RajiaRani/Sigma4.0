const { mailtrapClient , sender} = require("./mailtrap.config.js");
const {VERIFICATION_EMAIL_TEMPLATE} = require("../mailtrap/emailTemplates.js");

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
            "name": "Test_Name"
          },
       });
       console.log("Email sent successfully", response);
    } catch(error){

    }
}

module.exports = sendVerificationEmail;