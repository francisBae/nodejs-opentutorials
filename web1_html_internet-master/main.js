var http = require("http");
var fs = require("fs");
var app = http.createServer(function (request, response) {
  var url = request.url;
  if (request.url == "/") {
    url = "/index.html";
  }
  if (request.url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  console.log(__dirname + url);
  response.end(fs.readFileSync(__dirname + url)); //노드js가 파일로부터 경로에 해당되는 파일을 읽어들임
  //어떤 코드를 넣느냐에 따라 사용자에게 전송되는 데이터가 바뀜
  //ex) response.end("egoing : "+url); => ex) egoing : 3.html
});
app.listen(3000);
