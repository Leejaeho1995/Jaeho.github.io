// 1.숫자로만 이루어져 있는지검사
// function getNum(n){
//     let regExp = /[0-9]/;   -->  /^\d+$/;
//     const result = regExp.test(n);
//     return result;
// }
// console.log(getNum(''))

// 2.아이디가 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4-10자리 인지 검사
// function getUserId(uid) {
//     const regExp = /^[A-Za-z0-9]{4,10}/;
//     const result = regExp.test(uid);
//     console.log(result)
// }
// getUserId("da22")

//3. 문자열을 받아 첫번째 문자가 대문자인지 판단하는함수
//^[A-Z]

//4.이메일 주소를 검증하는 함수를 작성
//"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"

//5. 날짜 형식이 올바른지 검증
//
// function getDate(str){
//     const regExp = /^(?:[0-9]{2})?[0-9]{2}[-,., ,\/](1[0-2]|0?[1-9])[-,., ,\/](3[0-1]|[12][0-9]|0?[1-9])$/;
//     const result = regExp.test(str);
//     console.log(result);
// }
// getDate("2023.12.22")

// 6.문자열 앞과 뒤 의 공백 제거

// function Trim(str){
//     let result;
//     if(typeof str === "string"){
//         result = str.replace(/^\s+|s$/g,'')
//     }else{
//         result = false
//     }
//     return result
// }
// console.log(Trim("   d     "))

//7. " The quick brown fox  jumps over the lazy dog. "  - 위 문자열은 몇 개의 단어로 되어 있는지 정규식을 이용하여 조사하라.
  //- 시작 끝의 공백을 제거
  //- 2개 이상의 공백이 연속될 경우 1로 반환
//   function count_Split(str){
//     let str2;
//     //앞뒤 공백 제거
//     str2 = str.replace(/(^\s+)|(\s+$)/g,""); 
//     //연속되는 공백은 하나로 처리
//     str2 = str2.replace(/[ ]{2,}/gi," ");
//     str2 = str2.replace(/\n /,"\n");
//     const result = str2.split(" ").length;
//     return result;
//   }
// var str = " The quick brown fox  jumps over the lazy dog. ";
// console.log(count_Split(str))

//8 주어진값이 IP값이 맞는지 확인하는 함수 작성
//000.000.000.000 
// function getIp(ip){
//     const regExp = /^(([0-9])|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]\.){3}([0-9])|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
//     //챗 Gpt--> ^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
//     const result = regExp.test(ip);
//     console.log(result);
// }
/*
*^ 시작
* ([0-9]) >1자리 숫자 0-9
* [1-9][0-9] -> 10=> 2자리 숫자  10~99까지 사용
* 1[0-9]{2} -> 1 ,0-9 *2-> 3자리 숫자 100-199까지 사용
*2[0-4][0-9] -> 3자리 숫자 200~249 까지 사용
*25[0-5] -> 3자리 숫자 250~255 까지 사용

*/
//10. 숫자 세자리 수 마다 쉼표를 찍는 정규식을 작성하라.

function th_separator(num){
    let num_part = num.toString().split(".");
    num_part[0] = num_part[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return num_part.join(".");
}
console.log(th_separator(100000));
console.log(th_separator(123123.23));
