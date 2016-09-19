var voll = require('volleyball');
var express = require('express');
var app = express();

app.use(function (req, res, next) {
    // do your logging here
    console.log(res);
    var echoObj = {
        headers: req.headers,
        method: req.method,
        url: req.url,
        body: req.body
    };
    console.log(res.json(echoObj), req.originalUrl);
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();

});

app.all('/special/', function(req, res, next) {
    res.send("you're at the special place");
    console.log(req.method, req.path, res.statusCode);
});

app.get('/', function (req, res) {
    //res.send('hello world');
    console.log('hello')
});

app.get('/news', function(req, res) {
    res.send("you're at the news page");
});








app.listen(3000, function() {
    console.log("it's running...");
});