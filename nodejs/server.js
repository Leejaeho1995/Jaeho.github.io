const http = require('http');
const fs =require('fs').promises;

http.createServer(async (req,res)=>{
    try{
//정상적인 실행문
        const data= await fs.readFile('server.html');
        res.writeHead(200,{"Content-type":"text/html; charset=UTF-8"})
        res.end(data);
    }catch(err){
//에러발생시 실행문
        console.error(err)
        res.writeHead(500,{"Content-type":"text/plain; charset=UTF-8"})
        res.end(err.message);
    }
}).listen(8080, ()=>{
    console.log("8080번 포트에서 서버 대기중...")
});