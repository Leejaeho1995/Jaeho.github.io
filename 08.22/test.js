arr =[1,2,3,4,5,6,7,8,9,10]
//1. arr배열의 모든 요소를 더한 값을 출력하시오

// let n =1, sum=0
// while(n <11){
//     sum+= n
//     n++
// }
// console.log(sum)

// for(let i=1;i<11;i++){
//         sum+=1
// }

// const sum =arr.reduce((누적,현재) => 누적+","+현재+","+누적+현재)
// console.log(sum)
// arr.reduce(누적 , 현재 , index , array){
//     console.log(누적)
//     console.log(현재)
//     console.log(index)
//     console.log(array)
//     return 누적+ 현재
// }

let i=0
while( i<100){
    i++
    if(i===14){
        console.log(i+ '살부터 중학생입니다.')
        break;
    }
}
console.log(i)

let e=0
while( i<100){
    e++
    if(e % 2){
      continue
    }
}
console.log(i)

//object 의 key 또는 value를 출력할때 for in을 쓴다
//배열의 루프 