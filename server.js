var express = require('express');
var path = require('path');
var serveStatic = require('server-static');

var app = express();
app.use(serveStatic(path.join(__dirname, '/')));

var port = process.env.PORt || 5000;
app.listen(port);
console.log('Server started ' + port);