const http = require('http');
http.createServer((req,res) =>{
    console.log( req.url, req.headers.cookie);
    res.writeHead(200,{'Set-Cookie':'mcookie=geust'});
    res.end('Hello Cookie')
}).listen(8080,()=>{
    console.log('8080포트에서 요청을 기다리는중..')
})