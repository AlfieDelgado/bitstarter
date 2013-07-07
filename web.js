var indexfile = fs.readFile("index.html");
var indexbuf = new Buffer (indexfile, "utf-8");

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
    console.log(indexbuf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
