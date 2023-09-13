const http = require('http');
const fs= require('fs').promises;
const path= require('path');

const users= {};

http.createServer(async (req, res)=>{ //async 매개변수가 올때는 await가 붙는다
    try{
        if(req.method === 'GET'){
            //주소요청을 받았을때
            if(req.url === '/'){
                const data= await fs.readFile(path.join(__dirname,'test.html'))
                res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
                return res.end(data);

            }else if(req.url === '/about'){
                const data= await fs.readFile(path.join(__dirname,'about.html'))
                res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
                return res.end(data);
            }else if(req.url === '/user'){
                res.writeHead(200,{'Content-type':'application/json;charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
            //기본주소가 아닐경우
            try{
                const data= await fs.readFile(path.join(__dirname,req.url))
            }catch(err){
                console.error(err);
                 res.writeHead(404, {'Content-type':'text/plain;charset=utf-8'})
                 res.end(err.message);
            }
        }else if(req.method === 'POST'){
            console.log("*****************");
                if(req.url === '/user'){
                    let body= '';
                    //body를 stream형식으로 받는다.
                    req.on('data',(data)=>{
                        body += data;
                    })
                    //body를 다 받으면 아래부터 실행
                    return req.on('end',()=> {
                        console.log('POST본문 (body):',body)
                        const {name} = JSON.parse(body);
                        const id = Date.now()
                        users[id] = name
                        res.writeHead(201,{'Content-type':'text/plain;charset=utf-8'})
                        res.end('등록 성공')
                    })
                }
        }else if(req.method === 'PUT'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2]
                let body = '';
                req.on('data', (data)=>{
                    body += data;
                })
                return req.on('end',()=>{
                    console.log('PUT본문(Body):',body);
                    users[key] = JSON.parse(body).name;
                    res.writeHead(200, {'Content-type':'text/plain; charset=utf-8'})
                    return res.end(JSON.stringify(users));
                })
            }
        }else if(req.method === 'DELETE'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                delete users[key];
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND')
    }catch(err){
        console.error(err);
        res.writeHead(500, {'Content-type':'text/plain;charset=utf-8'})
        res.end(err.message);
    }
}).listen(8080,()=>{
    console.log('8080포트로 서버가 대기중입니다.')
})