const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

const portNum = 8080;

const connection = mysql.createConnection({
    user: "root",
    password: "Qudwns12!",
    database: "world",
    host: "localhost",

    // mysql 포트: 3306
    port: 3306
});

app.set("port", portNum);

app.set("view engine", "html");

nunjucks.configure("views", {
    express: app,
    watch: true
});

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    const querys = "select * from mybbs order by id desc limit 0, 20";
    connection.query(querys, (error, rows) => {
        if(error) throw error;
        res.render('index', {rows});
    });
})



//delete
app.get("/delete/:id", (req, res) => {

    console.log("***** Delete 진입 *****");
    
    const num = req.params.id;
    const d_querys = `delete from mybbs where id = ${req.params.id}`;
    connection.query(d_querys, (error, rows) => {
        if(error) throw error;
        res.writeHead(302, {Location: "/"});
        res.end();

    })
})

app.get("/insert", (req, res) => {
    res.render("insert");
})

app.post("/insert", (req, res) => {
    const title = req.body.title;
    const writer = req.body.writer;
    const content = req.body.content;
    
    console.log(req.query);

    const querys = `insert into mybbs (writer, title, content) values ("${writer}", "${title}", "${content}")`;
    connection.query(querys, (error, rows) => {
        if(error) throw error;        
        res.writeHead(302, {Location: "/"});
        res.end();
    })


})

app.get("/edit/:id", (req, res) => {

    res.render("edit", {id: req.params.id});

})

//update
app.get("/edit", (req, res) => {
    console.log(req.query);
    console.log(req.query.title);

    const updateQuery = `update mybbs set title = "${req.query.title}", writer = "${req.query.writer}" where id = ${req.query.id}`;
    connection.query(updateQuery, (error, rows) => {
        if(error) throw error;
        res.writeHead(302, {Location: "/"});
        res.end();
    })

})


// 에러처리
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 페이지를 찾을 수 없습니다.!!!!!`);
    error.status = 404;
    next(error);
})
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = err;
    res.status(err.status || 500);
    res.render(500);
})

app.listen(app.get("port"), () => {
    console.log(app.get("port") + " 포트 대기중");
})