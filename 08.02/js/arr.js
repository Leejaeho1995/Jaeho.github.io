// const arr = ["철수","영희","순희"];

// console.log(arr[2]);

// const obj ={
//     name: "철수",
//     age: 20,
//     area:"김포",
// }

// console.log(obj.name);

const func = function(){
    console.log('당신');
    return new Promise((res) =>{
        res('개발자');
    });
}
const execute = func()
console.log('근처의')
setTimeout(() =>{
    console.log('초보개발자');
}, 0)
execute.then((msg)=> console.log(msg));