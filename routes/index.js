var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log(tweets)
  res.render( 'index', { tweets: tweets } , function(err, html) {
    //console.log(html);
    res.send(html)
  });
});

module.exports = router;