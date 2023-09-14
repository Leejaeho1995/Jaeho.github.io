const express = require('express');
const router = express.Router();

//GET
router.get('/', (req, res)=>{
    res.render('index', {title:'노드 익스프레스'});
});
module.exports = router;