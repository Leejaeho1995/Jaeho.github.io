/*
1.
2.
3.
4.삭제 할 수없는 속성을 삭제하고자 할때 오류
5. eval, agruments는 예악어로 변수명으로 사용할 수 없음
6.
7.
8.
 */
// console.log("1")
// console.log("2")
// setTimeout(()=>{
//     console.log("3")
// },1000)
// console.log("4")

// setTimeout((name)=>{
// let snackList = name
// console.log(snackList)
// },500,'파운드')

//회원 스토리지 클래스
// class UserStorage{
//     loginUser(id,passward,onSuccess,onError) {
//         setTimeout(()=>{
//             if((id === 'admin' && passward =='1234') ||
//             (id === 'guest'&& passward =='1234')){
//                 onSuccess(id);
//             }else{
//                 onError(new Error('회원정보를 찾을 수 없습니다.'))
//             }
//         },1000);
//     }
//     getRloes(user,onSuccess,onError){
//         setTimeout(()=>{
//             if(user==='admin'){
//                 onSuccess({name:'admin',role:'관리자'});
//             }else{
//                 onError(new Error('권한이 없습니다.'))
//             }
//         })
//     }
// }
// const UserStorage = new UserStorage();
// const id =prompt("아이디를 입력하세요")
// const passward = prompt("비밀번호를 입력하세요")
// UserStorage.loginUser(id,passward,
//     user=>{
//         UserStorage.getRloes(
//             user,
//             userWithRole =>{
//                 alert(`반갑습니다.${user.name}님, ${user.name}님은 ${user.role}입니다.`)
//             },
//             error =>{}
//         )
//     },
//     error =>{
//         console.log(error)
//     }
//     )

// const promise = new Promise((resolve,reject)=>{
//     console.log('바로시작')
//     setTimeout(()=>{
//         //resolve('admin');
//         reject(new Error('no network'))
//     },1000)
// });
// promise.then((res)=>{
//     console.log(res)
// })
// .catch(error =>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log('어떻게하든 나온다')
// })
// console.log(promise)

const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('파운드')
    },500)
})
promise
.then(rs =>{
    console.log(rs)
    return rs;
})
.then((rs)=>{
    rs += ',마카롱'
    console.log(rs)
    return rs
})
.then(rs =>{
    console.log(rs)
    return rs;
})
.then((rs)=>{
    rs += ',코코볼'
    console.log(rs)
    return rs
})
.then(rs =>{
    console.log(rs)
    return rs;
})
.then((rs)=>{
    rs += ',디쿠아즈'
    console.log(rs)
    return rs
})
.catch(err=>console.log(err));