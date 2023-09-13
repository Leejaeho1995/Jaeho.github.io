const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer')
const fs = require('fs')

dotenv.config();
const app = express()
app.set('port',process.env.PORT || 8080);

app.use(morgan('dev'));  //dev 대신 combined, common, short, tiny 를 넣을수 있다.
app.use('/', express.static(path.join(__dirname, 'public')));

//body-parser 미들웨어 --npm i body-parser (express 4버전 이후부턴 내장되어 있음)
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//cookie-parser는 요청에 있는 쿠키를 req.cookies 객체로 만듬
//app.use(cookieParser(비밀키))
/* */
app.use(cookieParser(process.env.COOKIE_SECRET));

//express-session : cookie parser를 이용하므로 그뒤에 위치해야 한다.
/*
-req.session.name = 'hong' 세션등록
-req.sessionID; //세션 아이디확인
-req.session.destroy(); // 세선모두 제거
 */
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret:process.env.COOKIE_SECRET,
    cookie: {
        httpOnly:true,
        secure:false
    },
    name: 'session-cookie'
}))
try{
    fs.readdirSync('uploads');
}catch(error){
    console.error('uploads 폴더가 없어 uploads폴더를 생성합니다')
    fs.mkdirSync('uploads')
}
const upload = multer({
    storage:multer.diskStorage({
        destination(req, file, done){
            done(null,'uploads/')
        },
        filename(req, file, done){
            const ext= path.extname(file.originalname);
            done(null, path.basename(flie.originalname, ext)+ Date.now()+ ext)
        }
    }),
    limits: {fileSize: 5* 1024 * 1024}
})
app.get('/upload',(req, res)=>{
    res.sendFile(path.join(__dirname, 'multipart.html'))
});
app.get('/upload', upload.single('image'), (req, res)=>{
    console.log(req.file);
    res.send('ok');
});

app.get("/",(req, res)=>{
    //res.send("Hello, Express");
    res.sendFile(path.join(__dirname, '/index.html'));
    next();
}, (req, res)=>{
    throw new Error('에러는 에러처리 미들웨어로 보냅니다.');
});

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send(err.message);
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
});