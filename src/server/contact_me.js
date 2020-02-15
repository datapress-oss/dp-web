var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, './../client')))

// gets the POST req
app.post('/email', urlencodedParser, (req, res) => {
  console.log(req.body.username)
  console.log(req.body.password)
  res.send('success')
})

app.listen(5000)
