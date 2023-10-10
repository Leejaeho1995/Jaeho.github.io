const express = require('express');
const dotenv = require('dotenv');
const path = require('path'); //정적폴더
const nunjucks = require('nunjucks'); 
//nunjucks 초기화셋팅을 해야함
const indexRouter = require('./routes'); //app에서 router을 받음
const router = require('./routes');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 8080); //env 포트 또는 8080포트를 이용해 서버시작

app.set('view engine', 'html') //view engine에서 쓸 확장자
nunjucks.configure('views', { //어느 폴더에 있는것을 읽을 것인지 결정
    express: app,
    autoescape: true, //flase일 경우 html 태그허용 , true불가
    watch: true  //html이 변경되었을때 바로 수정되도록 설정
});  



app.use('/', express.static(path.join(__dirname, 'public'))); //public 폴더를 연결을 해놨기 떄문에 ../ 사용할 필요가없음
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //내장되어있는 module을 사용하겠다

app.use('/', indexRouter); //받은 router을 뿌려줌

app.use((req, res ,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
    error.status = 404;
    next(error);
});

app.use((err, req, res, next)=>{  //에러 메세지
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})



app.get("/", (req, res)=>{
    res.send("Hello Express")
})
app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + "에서 응답을 기다리는중 ..")
})