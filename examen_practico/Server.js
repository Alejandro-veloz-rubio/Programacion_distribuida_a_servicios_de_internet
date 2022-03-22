require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5')
const { appConfig } = require('./Lib/config')
const connection = require('./DB/connectdb')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/error', function(req, res) {
    res.render('error');
});

app.post('/sign', function(req, res) {
    if(req.body.sign_in == ""){
        res.render('sign_in');
    }else{
        res.render('sign_up');
    }
});

app.post('/sign_in_user', function(req, res) {
    if(req.body.sign_in == ""){
        let pass  = md5(req.body.pass) 
        connection.query('INSERT INTO sign_in_users (username_email, pass) VALUES (?, ?)',[req.body.username_email, pass], 
        function(err, result, fields){
            
            if (err) res.redirect('/error'); 
            res.render('home_user',{user_name:req.body.username_email})
        })
    
       }
});

app.post('/sign_up_user', function(req, res) {
    if(req.body.sign_up == ""){
        let pass  = md5(req.body.pass) 
        connection.query('INSERT INTO sign_up_users (username, email, pass) VALUES (?, ?, ?)',[req.body.username, req.body.email, pass], 
        function(err, result, fields){
            
            if (err) res.redirect('/error'); 
            res.render('home_user',{user_name:req.body.username})
        })
       }
});

app.post('/add_movie', function(req, res){
    if(req.body.add_movie == ""){
        res.render('add_movies');
    }
});

app.post('/add_Movies', function(req, res) {
    if(req.body.add == ""){ 
        connection.query('INSERT INTO new_movies (name, description) VALUES (?, ?)',[req.body.name, req.body.des], 
        function(err, result, fields){
            
            if (err) res.redirect('/error'); 
            res.render('sucessadd')
        })
       }
});


app.listen(appConfig.port, ()=> console.log(`Puesto en marcha en puerto ${appConfig.port}`)) 