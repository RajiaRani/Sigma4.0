const { MailtrapClient } = require("mailtrap");

const TOKEN = "8b219f469d780c272b4b134a6626aac8";
console.log("Mailtrap Token:", TOKEN);

const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Abroadhub",
};
// const recipients = [
//   {
//     email: "abroadhub.consult@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

module.exports = {mailtrapClient, sender};