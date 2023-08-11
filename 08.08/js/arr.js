//   1번문제 두개의 정수중에 하나는 양수 하나는 음수인지 확인.
function pnum(x , y){
    if((x < 0 && y> 0) || (x>0&& y<0)){
        return true;
    }else{
        return false;
    }
} 

console.log(pnum(10,20));
console.log(pnum(-10,10));
console.log(pnum(10,-9));

//2번문제
function addJava(str){
    if(str.substring(0,4)==="Java"){
    return str;
    }
    return "Java" +str;
}
console.log(addJava("script"));
console.log(addJava("Javascript"));

//3번문제
function nums(num){
    if(num %3==0 ||num %7==0){
        return true;
    }else{
        return false;
    }
}
console.log(nums(9));
console.log(nums(13));
console.log(nums(14));

function check_Numbers(x,y){
if ((x>=50 && x<=99) || (y>=50 && y<=99)){
    return true;
}else{
    return false;
}
}
console.log(check_Numbers(12,101));
console.log(check_Numbers(52,80));
console.log(check_Numbers(15,99));

//4번문제
function maxNumber(x,y,z){
    let max_val=0;
    if(x>y){
        max_val=x;
    }else{
        max_val=y;
    }
    if
        (z > max_val){
            max_val=z;
        }
        return max_val;
    }
console.log(maxNumber(1,3,2));
console.log(maxNumber(100,15,99));
console.log(maxNumber(1,7,20));


//6번 문제 두개의 숫자 값중에서 100에 가까운 값을 찾아라
//abs () --절대값 함수
function near_100(x,y){
    if(x !=y){
        x1= Math.abs(x-100);
        y1= Math.abs(y-100);
    
    if(x1 < y1){
        return x;
    }if (y1< x1){
        return y;
    }
    return "두 수가 같아요.";}
    else{
        return "두 수가 같아요.";
    }
}
console.log(near_100(102,95));
console.log(near_100(100,100));

//8번문제
function find(x,y){
    if((x>=40 && x<=60) && (y>=40 && y<=60)) {
        if(x==y){
            return true;
        }else if(x > y){
            return false;
        }else{
            return y;
        }
    }else{
        return "두수가 맞지 않아요";
    }
}
console.log(find(40,50));
//9번문제
function check_str(str,char){
    for(let i=0; i<str.length;i++){
        if((str.charAt(i)==char) &&(i=>1 && i<=3)){
            flag =1;
            break;
        }
    }
    if(flag==1) return true;
    return false;
}
console.log(check_str("Javascript","a"));
console.log(check_str("phyton","y"));
console.log(check_str("홍길동만만세","홍"));

//10번문제 
function hamsu(x,y,z){
if(x>0&& y>0 && z>0){
    (x%10 == y%10 && y% 10==z%10 && z%10 ==x%10);
}else{
    return false;
}
}
console.log(hamsu(13,23,33));