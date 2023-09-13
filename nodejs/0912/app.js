const express = require('express');
const path = require('path');
const pug = require('pug')

const app = express();
//express에 포함되어 있는 reuter
const indexRouter = require('./routes');
const userRouter = require('./routes/users')

app.set('port', 8080);
app.set('views', path.join(__dirname, 'pug'))
app.set('view engine', 'pug')

// app.use('/',express.static(path.join(__dirname,'public')));
// app.use('/',indexRouter);
// app.use('/users',userRouter);
app.get('/', (req, res)=>{
    res.locals.title = '퍼그연습';
    res.render('index')

})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 대기중')
});