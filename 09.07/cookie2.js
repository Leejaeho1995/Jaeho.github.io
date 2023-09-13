const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '')=>{
    cookie.split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) =>{
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});
}
http.createServer(async (req, res) =>{
    const cookies = parseCookies(req.headers.cookie); //[mcookie: 'guest']

    //주소가 /login인 경우
    if(req.url.startsWith('/login')){
            const url = new URL(req.url, 'http://localhost:8080');
            const name = url.searchParams.get('name');
            const expires = new Date();
            // 쿠키 유효시간 셋팅 (현재시간 + 5분으로 설정)
            expires.setMinutes(expires.getMinutes()+ 5)
            res.writeHead(302, {
                Location: '/' ,
                'Set-Cookie': `name=${encodeURIComponent(name)}
                Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
            });
            res.end();
        
            
    }else if(parseCookies.name){ //name이라는 쿠키가 있는 경우
        res.writeHead(200, {'Content-type':'text/plain; charset=utf-8'})
        res.end(`${parseCookies.name}님 반갑습니다.`);
    }else{
        try{
        const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
        res.end(data);
        }catch(err){
            res.writeHead(500,{'Content-type':'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
}).listen(8080, ()=>{
    console.log('8080포트로 서버 실행')
});