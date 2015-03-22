var http = require('http');

var server = http.createServer(function (request, response) {
  var now = new Date().toISOString();
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end([
    "<!doctype html><html>",
    "<head>",
    "<meta charset=utf-8>",
    "<title>Date and time</title>",
    "</head><body>",
    "<h1>Current time is " + now + "</h1>",
    "<p>This app is powered by node.js</p>",
    "</body></html>"
  ].join("\n"));
  console.log(now, "Request received");
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
