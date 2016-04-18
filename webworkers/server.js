var express = require('express');
var server = express();
server.use(express.static('static'));
// treats you're "/static" folder as a server running on localhost:3000,
// which means that if you put it in any server (like on the SE domain), it should
// run just fine!
server.listen(3000);
