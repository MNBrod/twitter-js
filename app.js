//main application
const express = require('express');
const app = express();
const http = require('http');
const PORT = 3000;
const nunjucks = require('nunjucks');


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
  noCache: true
}); // point nunjucks to the proper directory for templates

/**
 * Middleware
 */
app.use((req, res, next) => {
  console.log('Request Type:', req.method);
  console.log('Request URL:', req.originalUrl);
  next();
});
app.use('/special/', (req, res, next) => {
  console.log('Special middleware');
  next();
});
app.get('/special/', (req, res, next) => {
  res.status(200).end('you reached special');
});

app.get('/', (req, res) => {
  res.status(200);
  res.render('index', locals);
  //res.end();
});


var locals = {
  title: 'An example',
  people: [
    { name: 'Gandlaf the Grey' },
    { name: 'Frodo the not Grey' },
    { name: 'Hermione the out-of-place' }
  ]
};

// nunjucks.render('index.html', locals, (err, out) => {
//   console.log(out);
// });

