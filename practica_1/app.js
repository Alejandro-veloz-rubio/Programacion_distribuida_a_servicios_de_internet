require('dotenv').config()
const express = require('express')
const app = express()
const { appConfig } = require('./config')

app.get('/', function (req, res){
  res.send('Hello World')
})

app.listen(appConfig.port)