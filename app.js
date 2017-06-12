//main application
const express = require('express');
const app = express();
const http = require('http');
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
app.use((req, res, next) => {
  console.log(res.status(400));
  next();
})
app.get('/', (req, res) => {
  //res.end('Hello!');
  res.status(200).end('ended');
});
