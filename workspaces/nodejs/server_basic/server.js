var http = require('http');
var url = require('url');
var querystring = require('querystring');


var server = http.createServer(function( req, res){
    console.log('----log start----')
    var parsedUrl = url.parse(req.url); //주소값을 객체화 한 부분
    console.log(parsedUrl);
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);
    console.log('----log End----')

    res.writeHead(200, {'Content-type':'text/html'});
    res.end('Hello nodejs server')
})

server.listen(8080, function(){
    console.log('8080번 포트로 연결중')
})