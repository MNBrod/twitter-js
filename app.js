//main application
const express = require('express');
const app = express();
const http = require('http');
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.end('Hello!');
});
