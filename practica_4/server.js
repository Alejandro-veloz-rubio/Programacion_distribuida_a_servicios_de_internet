require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5')
const { appConfig } = require('./lib/config')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/practica', function(req, res) {
    res.render('practica');
});

app.post('/ingreso', function(req, res) {
    //res.send(`Has ingresado con el correo ${req.body.email} y con la contraseña ${req.body.pass}`)
    console.log(req.body);
    let pass = md5(req.body.pass)
    if(req.body.ingreso == ""){
        res.render('ingreso', {correo: req.body.email, pass: pass});
    }else{
        res.render('practica', {correo: req.body.email, pass: pass});
    }
});

app.listen(appConfig.port, ()=> console.log(`Puesto en marcha en puerto ${appConfig.port}`)) 