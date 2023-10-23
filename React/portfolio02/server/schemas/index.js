const mongoose = require('mongoose');
require('dotenv').config();

const mongodbid = process.env.MONGODB_ID;
const mongodbpass = process.env.MONGODB_PASS;
const mongodbhost = process.env.MONGODB_HOST;
const mongodbpost = process.env.MONGODB_POST;
const mongodbDB = process.env.MONGODB_DB;


const connect = () =>{
    if(process.env.NODE_ENV !=='production') {
        mongoose.set('debug',true)
    }
    //mongodb://아이디:비밀번호@주소:포트번호/admin
    mongoose.connect(
        `mongodb://${mongodbid}:${mongodbpass}@${mongodbhost}:${mongodbpost}/admin`,{
            dbName:mongodbDB,
            useNewUrlParser:true
        }
    ).then(()=>{
        console.log("몽고디비 접속 성공")
    }).catch((err)=>{
        console.error("몽고디비 연결 에러",err)
    });
};
mongoose.connection.on('error', (err)=>{
    console.error('DB연결에 실패했습니다.',err)
});

mongoose.connection.on('disconnected',()=>{
    console.error('DB연결이 끊겼습니다. 연결을 재시도 합니다.');
});

module.exports = connect;