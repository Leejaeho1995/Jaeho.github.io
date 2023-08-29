// function run(){
//     console.log("3초후 실행")
// }
// console.log("시작")
// setTimeout(run,3000)
// console.log("끝")

// function longRunningTask(){
//     //오래걸리는 작업
//     console.log("작업 끝")

// }
// console.log("시작")
// setTimeout(longRunningTask,0)
// console.log("끝")

const num1=1
const num2=2
let result
//num1 +num2 는 3입니다. 백틱` 을 이용
console.log(`${num1} 더하기 ${num2} 는 ${num1+num2}입니다.`)

var sayNode=function(){
    console.log("Node")
}
var es= 'ES'
var oldObject={
    sayJS:function(){
        console.log("JS")
    },
    sayNode, //:sayNode
    [es + 6]: '어렵지 않다.'
}
oldObject //[es+6]='어렵지 않다.'
oldObject.sayNode()
oldObject.sayJS()
console.log(oldObject.ES6)