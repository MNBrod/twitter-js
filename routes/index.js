const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('public'))
/*
router.get('/stylesheets/style.css', (req, res) => {
  res.sendFile('/Users/max/Fullstack/twitter-js/public/stylesheets/style.css');
});
*/

module.exports = router;


// // app.get('/special/', (req, res, next) => {
// //   res.status(200).end('you reached special');
// // });

// // app.get('/', (req, res) => {
// //   res.status(200);
// //   res.render('index', locals);
// // });
// var locals = {
//   title: 'A bunch of movie characters',
//   people: [
//     { name: 'Gandlaf the Grey' },
//     { name: 'Frodo the not Grey' },
//     { name: 'Hermione the out-of-place' },
//     { name: 'Gimly the vertically-challenged' },
//     { name: 'David the Fullstacker' }
//   ]
// };
