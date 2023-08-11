let arr1 =["사당","교대","방배","강남"];
let arr2 =["신사","압구정","옥수"];

// 함수에서는 괄호는 ()로 사용
let rs = arr1.join("--");
console.log(rs);

rs = arr1.toString();
console.log(rs);

let arr3 = arr1.concat(arr2);
console.log(arr3);  //2개의 배열을 하나의 배열로 만들어준다.

rs =arr1.slice(2,3);
console.log(rs); //배열의 1번 이전의 인덱스 요소를 잘라냄 그리고 남은 값 반환

rs =arr1.sort();
console.log(rs);
console.log(arr1);

rs =arr2.reverse();
console.log(rs);
console.log(arr2);
