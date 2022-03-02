require('dotenv').config()
const express = require('express')
const app = express()
const { appConfig } = require('./lib/config')
const connnection = require('./db/mysql');
const connection = require('./db/mysql');

// Metodo GET en raiz
app.get('/', function(req, res) {
  res.sendfile('./views/index.html');
  let ts = Date.now();
  connection.query('INSERT INTO valores(val, gety) VALUES(?,?)',[ts,'raiz'])
});

app.get('/add', function(req, res) {
    res.sendfile('./views/add.html');
    let ts = Date.now();
    connection.query('INSERT INTO valores(val, gety) VALUES(?,?)',[ts,'add'])
  });

app.listen(appConfig.port, ()=> console.log(`Puesto en marcha en puerto ${appConfig.port}`))