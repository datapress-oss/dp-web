var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var Email = require('./Email')
var app = express()

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// declare client dir
const clientDir = path.join(__dirname, '/../../dist')
app.use(express.static(clientDir))

// handles the POST req
app.post('/email', urlencodedParser, (req, res) => {
  const mail = new Email(req.body.name, req.body.email,req.body.phone,req.body.message)
  mail.SendMail()
  // redirect back to page
  res.sendFile(path.join(clientDir, 'index.html'))
})

app.listen(5000)
