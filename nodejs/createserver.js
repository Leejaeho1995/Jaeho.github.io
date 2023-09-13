const http= require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'})
    res.write("<h1>Hello Node!!!")
    res.write("<p>제 서버입니다.</p>")
    res.end("<p>Good Bye.</p>")
})
Server.listen(8080);

Server.on('listening',()=>{
    console.log("8080번 포트에서 서버가 대기 중입니다.");
})
Server.on('error',(error)=>{
    console.error(error);
})