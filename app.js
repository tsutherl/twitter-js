var express = require('express');
var app = express();
var morgan = require('morgan');

app.get('/', function(req, res, next) { //param next takes the next function 
    //res.send('at the root page'); //res.send is like the console.log for the browser
    next(); //a response is like return in js - any remaining stuff will not run! so having this next after a response would bring on errors
});

app.get('/news', function(req, res, next) {
    res.render('at the news page');
});


app.listen(3000, function() { //takes optional function param which will run when it's ready to take requests
    console.log('listening on port 3000');
});


