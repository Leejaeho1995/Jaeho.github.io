// const snack =()=>Promise.resolve('와, 맛있겠다!') //4

// async function mySnack(){
//     console.log('치즈 케이크 주세요!') //2
//     const res =await snack(); 
//     console.log(res)
// }
// console.log('주문하시겠어요?') //1
// mySnack() //
// console.log('주문하신 케이크 나왔습니다.') //3

// function cook(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// const myCake = async ()=>{
//     await cook(1000)
//     return '케이크 완성'
// }
// const myCoffee =async() =>{
//     await cook(500)
//     return '커피완성'
// }
// const myCookie = async () =>{
//     await cook(5000)
//     return '쿠키 완성'
// }
// async function asyncProcess(){
//     const cake =await myCake()
//     console.log(cake)
//     const coffee = await myCoffee()
//     console.log(coffee)
//     const cookie = await myCookie()
//     console.log(cookie)
// }
// asyncProcess()
// async function process(){
//     console.log('스낵을 만드는 중입니다!')
//     await cook(3000)
//     console.log('스낵이 완성되었어요!')
// }
// process().then(()=>{
//     console.log('맛있게 드세요!')
// })
// async function promiseProcess(){
//     const results = await Promise.all[myCake(),myCoffee(),myCookie()]
//     console.log(results)
// }
// promiseProcess()

// function setTimeoutPromise(ms){
//     return new Promise((res,rej)=>{
//         setTimeout(()=> resolve(), ms)
//     });
// }

// async function fetchTime(id) {
//     await setTimeoutPromise(500)
//     console.log(`${id}님의 데이터가 준비되었습니다.`)
//     return Math.floor(Math.random()*20) + 1;
// }

// async function asyncProcess() {
//     let hours =[]
//     for(let i =1;i<6;i++){
//         hours.push(fetchTime(i))
//     }
// }
// let result = await Promise.all(hours);

// console.log(`평균 공복시간은?: ${result.reduce((prevalue, currentvalue)=>prevalue + currentvalue, 0)/result.length}`)

// asyncProcess();

function fetchUserId(){
    const userUrl = 'http://jsonplaceholder.typicode.com/user/7';
    return fetch(userUrl).then(res=>res.json())
}
fetchUserId()

function fetchUserTodo(){
    const todoUrl = 'http://jsonplaceholder.typicode.com/todos/7';
    return fetch(todoUrl).then(res=>res.json())
}

async function getTodoTitle(){
    const user = await fetchUserId();
    console.log(user);
    if(user.id === 7){
    const todo =await fetchUserTodo();
    console.log(todo.title)
}
}
function weatherGet(){
    const url= 'http://jsonplaceholder.typicode.com/weather/7';
    return fetch(url).then(res=>res.json())
}
async function getWeatherTitle(){
    
}