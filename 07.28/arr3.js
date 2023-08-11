// function calculateTriangleArea(a, b, c) {
//     const s = (a + b + c) / 2;
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
  
//   const sideA = 5;
//   const sideB = 6;
//   const sideC = 7;
  
//   const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
//   console.log(triangleArea);
const a =5;
const b =6;
const c =7;

const s =(a+b+c) /2;
const traingle =Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(traingle);


// -----------------------------
for(let year=2014; year<=2050; year++){
    var d = new Date(year,0,1);
    if(d.getDay()==0){
        document.write(year + "<br>");
    }
}


// let srt = new String();

// let str = "";

// let arr = new Array();
// let arr = [];

// let str = new String("Hello world!!");
// alert(str);

//charAT(index)
//indexOf(문자)
let str ="안녕하세요 저는 쌤.입니다.";

document.write(str.charAt(10));



