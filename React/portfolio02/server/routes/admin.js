const express = require('express');
const Admin = require('../schemas/admin');
const router = express.Router();
const bcrypt = require('bcrypt')
require('dotenv').config()

router.route('/')
.get((req, res, next)=>{
    res.render('admin')
})
.post(async (req, res, next)=>{
    try{
        let { userid, userpass} = req.body;
        const datas =await Admin.find({userid:userid})

        if(datas.length >0){
            res.send(0);
        }else{
            const hash = await bcrypt.hash(userpass, Number(process.env.SALT_ROUNDS))
            console.log("Hash:",hash);
            const admins = await Admin.create({
                userid:userid,
                userpass:hash
            })
        }
    }catch(err){
        console.error(err)
        next(err)
    }

    
})
module.exports = router;