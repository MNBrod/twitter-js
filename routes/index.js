const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log(list);
  res.render( 'index', { tweets: list } );
});

router.use(express.static('public'))


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
