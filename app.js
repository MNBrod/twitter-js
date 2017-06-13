//main application
const routes = require('./routes');

const morgan = require('morgan');
const express = require('express');
const app = express();
//const http = require('http');
const PORT = 3000;
const nunjucks = require('nunjucks');


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates


app.use(morgan('dev'));
app.use('/', routes);







/**
 * Middleware
 */
// app.use((req, res, next) => {
//   var log = req.method + " " + req.originalUrl;
//   //console.log(log);
//   next();
// });

