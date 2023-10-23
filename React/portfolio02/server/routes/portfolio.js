const express = require('express');
const Portfolio = require('../schemas/portfolio');
const Category = require('../schemas/catagory');

const upload = require('../upload/upload');
const router = express.Router();
router.route('/list')
.get(async (req, res, next)=>{
    try{
    let show = 0;
    show = req.query.show
    let maxNum = 0;
    const row = await Portfolio.find({});
    const rs = await Category.find().sort({"num":"desc"});
    if(rs.length>0){
        maxNum = rs[0].num
        console.log("**");
    }
    res.render('portfolio', { row, rs, maxNum, title:"포토폴리오", show:show});
    
     }catch(err) {
     console.error(err);
     next(err);
    }
});

router.route('/write')
.get(async(req, res, next)=>{
    try{
        const row = await Category.find().sort({"num":"desc"})
 res.render('portfolio_write',{title:"포트폴리오", row})
    }catch(err){
        console.error(err);
        next(err);
    }
})

router.route('/category/write')
.post(async (req, res ,next)=>{
    try{
    const addCategory = await Category.create({
        name:req.body.category,
        num: num
    });
    console.log(addCategory);
    res.send('1');

}catch(err){
    console.error(err);
    res.send('0');
}
});
router.route('/category/update')
.post(async (req, res, next)=>{
    try{
    let cate = req.body.category.reverse();
    //배열을 역순으로 바꿔야함
    let categoryId = new Array();
    let categories = new Array(); //update 할 배열 변수를 만듬
    let cateNums = new Array();
    for(let i=0; i<cate.length; i++){ //배열 변수에 update할 구문을 담는다.
        categories.push(cate[i])
        cateNums.push(i+1);
    }
    for(let i=0; i<categories.length; i++){
        await Category.updateMany({num:cateNums[i]},{name:categories[i]});
    }
    res.send('1')
    }catch(err){
        connsole.error(err);
        res.send('0');
        next(err);
    }
})

module.exports = router;