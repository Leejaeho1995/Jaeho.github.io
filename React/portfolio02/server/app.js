const express = require('express');
const indexRouter = require('./routes')

const app = express();
app.set('port',process.env.PORT || 3001);



app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/',indexRouter);

//에러처리
app.use((req, res, next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터를 찾을수 없습니다.`)
    error.statue = 404;
    next(error);
})
app.use((err, req, res)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'produciton' ? err : {};
        res.status(err.status || 500);
        res.send('error')
    }
)

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기 중');
});