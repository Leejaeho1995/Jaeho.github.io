let greenArr =["교대","방배","강남"];
let YellowArr =["미금","정자","수서"];
// 2번 인덱스부터 1개의 데이터를 삭제하고 
// 서초와 역삼을 추가한다.

let rs=greenArr.splice(2,1,"서초","역삼");
console.log(rs);//결과는 삭제된 데이터값이 담김 =(2번인덱스부터 1개의 데이터를 삭제하고 남은값)
console.log(greenArr);//자기 자신이 splice 되었다.


// let data1 =YellowArr.pop();
// console.log(data1); //수서
// console.log(YellowArr); //미금,정자 (수서는 빠져나감)

// let data2 =YellowArr.shift();
// console.log(data2); //미금
// console.log(YellowArr); //정자

// let data3 =YellowArr.push(data2);
// console.log(data3); // 2 ??..< push한 후 전체 인덱스 값 >
// console.log(YellowArr); //정자,미금

// let data4 =YellowArr.unshift(data3);
// console.log(data4);
// console.log(YellowArr);


let result = YellowArr.push(2);
console.log(result);
console.log(YellowArr);
