// var a=20;
// var b=30;
// function str(){
//     var a= 40;
//     console.log(a)
// }
// if(true){
//     var b=50
//     console.log(b)
// }
// console.log(b)
//--스코프--
// var a =30;
// function str(){
//  a=15;

// }
// str()
// console.log(a)

// hello= 'hello javascript'
// console.log(hello)
// var hello;
// console.log(hello)

// var -중복선언 가능
//let -> 1. 중복선언 불가능
//    let a= 1234;
//    let a= ~~~ 중복불가능 / 값의 재할당만 가능

let hello =10;
{
    let hello = 40;
    let world= 20;
    console.log(hello)
    console.log(world)
}


console.log(str(40))
function str(num){
    let sum = num*2
    return sum
}

const player = new Object()
player.name ='Choi'
player.sayWinner = function(){
    console.log('Ladies and gentlemen, Champion' + this.name)
}
player.sayWinner();