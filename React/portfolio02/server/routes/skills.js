const express = require('express');
const Skills = require('../schemas/skills');
const upload = require('../upload/upload');
const fs = require('fs-extra');
const router = express.Router();

router.route('/list')
.get(async (req, res, next)=>{
    try{
        const row = await Skills.find({});
        res.render('skills',{row, title:'나의 스킬'})
    }catch(err){
        console.error(err);
        next(err);
    }
})

router.route('/write')
.get( (req, res, next)=>{
    res.render('skills_write', {title:'나의 스킬'});
})
.post( upload.single("img"), async(req, res, next)=>{
try{
    fs.moveSync("./img/"+req.file.filename, "./img/skills/"+req.file.filename);
    let fileupload ='';
    if(!req.files){
            fileupload ={
            orimg: req.file.originalname,
            img: req.file.filename
            }
        }
        const data = {
            name: req.body.name,
            value: req.body.value,
        }
        const datas = {...data,...fileupload}
        const skills = await Skills.create(datas)
        console.log(skills)
        res.redirect('/skills/list')
    
}catch(err){
console.error(err)
next(err);
}
});

router.route('/edit/:id')
.get(async (req, res, next)=>{
    try{
        const {id} = req.params; //const {id} = req.params;
        const row = await Skills.find({_id:id});
        const rs = row[0];
        res.render('skills_update', {rs, title:"스킬 업데이트"});
    }catch(err){
        console.error(err);
        next(err);
    }
})
router.route("/edit/:id")
router.route("/write").post(upload.single("img"), async (req, res, next) => {
    try{
        fs.moveSync("./img/" + req.file.filename, "./img/skills/" + req.file.filename);
        console.log("***** routes => skills.js => router.route.post('/write')");
        let fileupload;
        if(!req.file){
            fileupload = "";
        }
        else{
            fileupload = {
                orimg: req.file.originalname,
                img: req.file.filename
            }
        }
        console.log(req.file);
        console.log(fileupload);
        const skills = await Skills.create({
            name: req.body.name,
            value: req.body.value,
            orimg: fileupload.orimg,
            img: fileupload.img
        });
        res.redirect("/skills/list");
    }
    catch(err){
        console.error(err);
        next(err);
    }
})
router.route('/del/:id')
.get(async (req, res, next)=>{
    try{
    const {id} = req.params;
    const row = await Skills.find({_id:id})
    const rs = row[0];
    res.render('skills/list')
    }catch(err){
        console.error(err);
        next(err);
    }
})
.post(async (req, res, next)=>{
    try{
        const {id} = req.params;
        const row = await Skills.deleteOne({_id: id})
        const rs = row[0];
        res.redirect("skills/list",rs)
    }catch(err){
        console.error(err);
        next(err);
    }
})

module.exports = router;