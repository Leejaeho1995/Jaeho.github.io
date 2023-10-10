const express = require('express');
const router = express.Router();

/////////////////// MYSQL 연결 //////////////////////
const mysqlConn = require("../config/mysql");
const conn = mysqlConn.init();
mysqlConn.open(conn); //연결 출력

////////////////기본주소 설정 ///////////////////
router.get('/', (req, res)=>{
    const sql = "select * from ndboard order by orNum desc, grNum asc";
    conn.query(sql, (err, row, fields) => {
        if(err)
            console.log(err)
        else {
            for(let rs of row) {
                let odate;
                let layer = '';
                    if(rs.grLayer > 0) {
                        for(let i=0; i<= rs.grLayer;i++){
                            layer += "\u00a0";
                        }
                    }
                    rs.grLayer = layer;
                    odate = new Date(rs.wdate)
                    rs.wdate = `${odate.getFullYear()}-${odate.getMonth()+1}-${odate.getDate()}`
                }
                //console.log(row);
            res.render('index', {title: "게시판 목록", row: row});
        }
    })
});

router.get("/write", (req, res, next)=>{
    res.render("write", { title: "게시판 글쓰기"});
});

////////////////////////////  insert  //////////////////////////////////////
router.post('/write', (req, res, next)=>{
    const rs = req.body;
    let sql = "insert into ndboard(orNum, grNum, writer, userid, userpass, title, content) values(?,?,?,?,?,?,?)"
    conn.query(sql,[
        0,1,rs.writer,'guest',rs.pass,rs.title,rs.content
    ],(err, res, fields)=>{
       if(err){ 
        console.log(err)
    }else{
         console.log(res.insertId)
        sql = "update ndboard set ? where num ="+res.insertId;
        conn.query(sql, {orNum: res.insertId},
            (err, res, fields)=>{
                if(err)
                console.log(err);
            else{
                console.log("업데이트 성공");
            }
            })
        }     
    })
    res.redirect('/')
})

/////////////////////  게시판 클릭해서 내용보기  ////////////////////////
router.get("/view/:num", (req, res)=>{
    let num = req.params.num;
    let sql = "select * from ndboard where num = ?"
    conn.query(sql, [num], (err, row, fields)=>{
        if(err)
        console.log(err);
        res.render("view", {title: "게시판 내용보기", row})
    }) 
})

////////////////// 수정 ////////////
router.get("/edit/:num", (req, res)=>{
    const { num} = req.params;
    const sql = "select * from ndboard where num = ?";
    conn.query(sql, [num], (err, row, fields)=>{
        if(err){
            console.log(err);
        }else{
            res.render("edit",{title : "내용수정", row})
        }
    })
})

router.post("/edit/:num", (req, res)=>{
    const { num } = req.params;
    const rs = req.body;
    const sql = "update ndboard set ? where num = ?"
    conn.query(sql, [{
    title: rs.title,
    content: rs.content},num],
        (err, res, fields) => {
            if(err)
            console.log(err);
        else{
            console.log("업데이트 성공");
        }
    })
    res.redirect('/edit/:num')
})
/////////// 목록 ////////////////////
router.post('/write', (req, res)=>{
    const data = req.title.body;
    res.render("index", {data})
    console.log(data)
})

module.exports = router //router을 내보냄 app에서도 받아야함