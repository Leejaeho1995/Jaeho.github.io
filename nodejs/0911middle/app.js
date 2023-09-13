const express = require('express');
const path = require('path'); //파일의 경로
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser')
const urlcodeParser = bodyParser.urlencoded({extended:false});
const multer = require('multer'); //업로드관련
const fs = require('fs');

try{
    fs.readdirSync('uploads')
}catch(err){
    console.error('uploads폴더가 없습니다. uploads폴더를 생성합니다.')
    fs.mkdirSync('uploads')
}


dotenv.config();
app.set('port',process.env.PORT || 8080);
//static 정적파일
app.use('/', express.static(path.join(__dirname, 'www')));

//dirname은 폴더까지 경로만 설정됨
app.get('/', (req, res)=>{
    console.log('GET요청이 오면 실행 됩니다.')
})


/*
*storage에는 어디에 어떻게 저정할지 destinamtion에 filename으로
* 첫 번째 인자는 에러 두번째 인자 실제경로 또는 파일이름, done은 함수로
*file 또는 req를 가공해 넘기는 형태
 */
const upload = multer({
    storage: multer.diskStorage({
        destination(req,res,done){
            done(null, 'upload/');
        },
        filename(req, file ,done){
            const ext = path.extname(file.originalname)
            done(null, path.basename(file.originalname, ext)+ Date.now()+ext);
        }, //이름 + 현재시간 + 확장자로 저장
    }),
    limits:{ filesize: 5* 1024 * 1024} //최대 5mb
});

app.post('/upload', upload.single('userface'),(req, res)=>{
    console.log(req.file);
    res.send('ok');
});

app.get('/upload', (req, res)=>{
    res.sendFile(path.join(__dirname,'www/upload.html'));
});

app.get('/multiupload', (req, res)=>{
    res.sendFile(path.join(__dirname,'www/multiupload.html'));
});

app.post('/multiupload', upload.array('image'),(req, res)=>{
    console.log(req.files, req.body);
    res.send(req.files);
});
app.get('/uploads', (req, res)=>{
    res.sendFile(path.join(__dirname,'uploads.html'));
});
const mUpload = upload.fields([
    {name:'image1'},{name:'image2'},{name:'image3'}
]);
app.post('/uploads', mUpload,(req, res)=>{
    console.log(req.file, req.body);
    res.send('ok');
});

app.post('/',urlcodeParser,(req, res)=>{
    const body =req.body;
    let username = body.username;
    let userpass = body.userpass;
    res.send(`${username}님 비밀번호는 ${userpass}입니다.`)
    res.send(`${username}님 주소는${'#sample4_postcode'}입니다.`)
})


app.get('/', (req, res)=>{
    res.send('Hello, Express!!')
})

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 대기중`);
})
