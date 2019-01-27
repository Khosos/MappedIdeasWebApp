// server.js
// load the things we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// // index page 

app.get('/', function(req, res) {
    res.redirect('map'); 
 });

app.get('/map', function(req, res) {
    res.render('pages/map');
 });

// about page 
app.get('/camera', function(req, res) {
    res.render('pages/camera');
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
