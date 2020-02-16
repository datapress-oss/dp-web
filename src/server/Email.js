const nodemailer =require ('nodemailer')



class Email {
  constructor (name, email, phone, message) {
    this.name = name
    this.email = email
    this.phone = phone
    this.message= message
  }

  async SendMail() {
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
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'ludwig0@ethereal.email', // generated ethereal user
          pass: 'zg2cUbNuMpNXfA1P8K'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    })

    // setup email data with unicode symbols
    let mailOptions = {
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
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error)
      }
      console.log('Message sent: %s', info.messageId) 
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

      res.render('contact', {msg:'Email has been sent'})
    })

    // end of SendMail() method
  }

}
module.exports = Email