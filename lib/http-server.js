'use strict';

let fs = require('fs');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

// Let's create the regular HTTP request and response
app.get('/', function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('client/index_old.html'));
});
app.get('/webrtc.js', function(req, res) {

  res.writeHead(200, {'Content-Type': 'application/javascript'});
  res.end(fs.readFileSync('client/webrtc.js'));
});

app.post('/', function(req, res) {

  let message = req.body.message;
  console.log('Regular POST message: ', message);
  return res.json({

    answer: 42
  });
});

module.exports = app;
