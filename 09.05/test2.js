const numberLIst=[124,230,333,152,1233]//value는 값 index는 순서 array는 배열전체

numberLIst.forEach(function(value,index,array){
    console.log("value :"+ value, "index :" +index, "array : "+array)
}) 
const evNumber=numberLIst.map((x)=>x % 2==0)
const dobleNumber=numberLIst.filter((v) => v%2==0)
console.log(dobleNumber)
console.log(evNumber)
evNumber.forEach(function(x){console.log(x)})



numberLIst.forEach(x=>{console.log(x*2)})       //식은다르지만 같음
numberLIst.forEach(function(x){console.log(x*2)})

