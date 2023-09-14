const express = require('express');
// const path = require('path');
const nunjucks = require('nunjucks');
const app = express()
const indexRouter = require('./routes')



app.set('port', 8080)
// app.get('/', (req, res)=>{
//     res.send('웹페이지 테스트')
// })

app.set('view engine', 'html'); //njk
nunjucks.configure('html',{
    express: app,
    watch: true
})

app.use('/', indexRouter)
app.use((req, res, next)=>{
    res.status(404).send('페이지를 찾을 수 없습니다.')
})
app.use((req, res, next)=>{
    console.log(err);
    res.status(500).send(err.message)
})
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), + '에서 대기중...')
})