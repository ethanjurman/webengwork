var express = require('express');
var server = express();
server.use(express.static('static'))
server.listen(3000);
