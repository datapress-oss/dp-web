const nodemailer = require('nodemailer')
// EMAIL CREDENTIALS
const Credentials = {
  host: 'YOUR_SMTP_SERVER',
  port: 587, // SMTP server port
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'YOUR_EMAIL_ADDRESS',
    pass: 'YOUR_EMAIL_PASSWORD'
  },
  tls: {
    rejectUnauthorized: false
  }
}

class Email {
  constructor (name, email, phone, message) {
    this.name = name
    this.email = email
    this.phone = phone
    this.message = message
  }

  async SendMail () {
    // output format that will be sent to us
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${this.name}</li>
      <li>Email: ${this.email}</li>
      <li>Phone: ${this.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${this.message}</p>
    `

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport(Credentials)

    // setup email data with unicode symbols
    const mailOptions = {
      from: this.email, // sender address
      to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
      subject: 'Message from website', // Subject line
      text: `
      Name: ${this.name}
      Email: ${this.email}
      Phone: ${this.phone}
      Message: ${this.message}
      `, // plain text body
      html: output // html body
    }

    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions)
    console.log(`Message sent: ${info.messageId}`)

    // end of SendMail() method
  }
}
module.exports = Email
