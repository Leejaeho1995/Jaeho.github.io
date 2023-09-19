const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const nunjucks = require('nunjucks');
const Router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const { request } = require('http');


const connection = mysql.createConnection({
        user: 'root',
        password: '123123',
        database: 'myboard',
        host: 'localhost',
        port: 3306
});


const app = express();
app.set('port',8080);
app.set('view engine','html');
nunjucks.configure('views',{
    express: app,
    watch: true
})

app.use(bodyParser.urlencoded({extended:false}));


app.get('/', (req, res)=>{
    const querys =  'select id, writer, title, date_format(wdate, "%y-%m-%d %T") as nowdate from mybbs order by id asc limit 0, 20'
    connection.query(querys, (error, rows)=>{
        if(error) throw error;
        console.log(rows)
        res.render('index', {rows});
    })
    });

    //delete
app.get('/delete/:id', (req, res, next)=>{ //sql delete부분
    const idToDelete = `delete from mybbs where id = ${req.params.id}`
    connection.query(idToDelete, (error, rows)=>{})
    const querys = 'select id, writer, title, date_format(wdate, "%y-%m-%d %T") as nowdate from mybbs order by id asc limit 0, 20'
    connection.query(querys, (error, rows)=>{
        if(error) throw error;
        console.log(rows)
        res.render('index',{rows})  
    })
})
//insert

// app.get('/insert', (req, res)=>{ //sql insert부분
// res.render('insert', {title:"노드 글쓰기"})

// })
// app.post('/insert', (req, res)=>{
//     //post는 req.body로 받는다
//     const writer = req.body.writer;
//     const title = req.body.title;
//     const content = req.body.content;
//     //sql
//     const querys =`insert into mybbs (writer, title, content) vlaue `})

//update
app.get('/edit/:id', (req, res)=>{
    res.render("edit", {id: req.params.id});

})

app.get('/edit', (req, res)=>{
    console.log(req.query);
    console.log(req.query.title);
    const idToUpdate = `update mybbs set title = "${req.query.title}", writer = "${req.query.writer}" where id = "${req.query.id}"`
    connection.query(idToUpdate, (error, rows)=>{
        if(error) throw error
        res.writeHead(302, {Location: "/"})
        res.end()
    })
})  
//에러처리
// app.use((req, res, next)=>{
//     const error = new Error(`${req.method} ${req.url} 페이지를 찾을 수 없습니다`)
//     error.status = 404;
//     next(error);
// })

// app.use((err, res, req, next)=>{
//     res.locals.message = err.message;
//     res.locals.error = err;
//     res.status(err.status || 500);
//     res.render(500);
// })

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 대기중...')
})