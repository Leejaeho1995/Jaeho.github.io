const express = require('express');
const router = express.Router();

//GET 라우터
//정규 표현식을 비롯한 특수 패턴사용이 가능 ()
router.get('/',(req, res)=>{
    res.render('index', {title:'Express', content:'퍼그연습입니다.'})
})

module.express =router;

router.get('/abc/:id', (req, res)=>{
    console.log(req.params, req.query)
    res.send('GET /abc')
})

router.get('/abc',(res, req)=>{
    console.log(app.get('port'), '번 포트에서 대기중')
})

router.get('/def', (req, res)=>{
    res.send('GET /def');
});