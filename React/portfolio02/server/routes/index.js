const express = require('express');
const router = express.Router();


//res.render 또는 json /// write end는 html에서만
router.get('/', (req, res, next)=>{
    res.send('라우터가 실행됨');
})


module.exports = router ;