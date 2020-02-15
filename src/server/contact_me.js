//bode mailer




async function main() {
  
  let nodemailer = require('nodemailer');
  let testAccount = await nodemailer.createTestAccount();

 
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass 
    }
  });

 
  let info = await transporter.sendMail({
    from: '"Fred Foo " <foo@example.com>', 
    to: "bar@example.com, baz@example.com", 
    subject: "Hello ✔",
    text: "MEEEEEEEEEEEEEEGY!!!!", 
    html: "<b>MEEEEEEEEEEEEEEGY!!!!</b>"
  });

  console.log("Message sent: %s", info.messageId);


  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);