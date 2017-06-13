module.exports = function (io) {
  const express = require('express');
  const router = express.Router();
  const bodyParser = require('body-parser');
  // could use one line instead: const router = require('express').Router();
  const tweetBank = require('../tweetBank');

  // parse application/x-www-form-urlencoded

  router.use(bodyParser.urlencoded({ extended: true }))
  // parse application/json
  router.use(bodyParser.json())

  router.use(express.static('public'))

  router.post('/tweets', function (req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets})
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find({ name: name });
  res.render('index', { tweets: list, showForm: true, userName: name });
});

// router.get('/newtweet', (req, res) => {
//   res.render( 'index', { showForm: true } );
// })

router.get('/tweets/:id', (req, res) => {
  var tweet = tweetBank.find({ id: +req.params.id });
  res.render('index', { tweets: tweet });
});
return router;
}
