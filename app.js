const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/ind210')));

app.get('*', function (req, res, next) {
  res.sendFile(__dirname + 'dist/ind210/index.html');
});


const server = http.createServer(app);

server.listen(3000);
console.log(`Server listening on 3000`);
