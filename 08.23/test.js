let menu ='아메리카노';
let price;
switch(menu){
    case '아메리카노':
        price:4000;
        break;

        case '바닐라라떼':
        price:6000;
        break;
        default:
            console.log('해당하는 메뉴 없음.')
}

const val =18;
//let item = val>18? console.log("성인입니다.") : console.log("미성년자 입니다.")
//let item = val > 18? "성인입니다" : "미성년자입니다."
//console.log(item)


let item2;
if (val>18){
    item2 = "성인입니다."
}else{
    if(val>17){
    item2 ="주민증은 나왔지만 미성년 입니다."
}else{
    item2 = "미성년자 입니다."
}

}

//console.log(item)
console.log(item2)


let num =0
if(num){
    console.log(`$(num)은 영어로 제로입니다.`)
}else{
    console.log(`$(num)은 값이 없음을 뜻합니다.`)
}

let coffeList = []
if(coffeList){
    console.log('커피리스트:'+ coffeList)
}else{
    console.log('커피 종류를 입력하세요')
}
if(coffeList.length){
    console.log('커피리스트:' + coffeList)
}else{
    console.log('커피 종류를 입력하세요')
}

let member =[]
if(member){
    console.log('선수명단:' + member)
}else{
    console.log('선수명단을 입력해주세요')
}
console.log(1 && 2 && 3)

function ad(num){
    return num>18&&"성인입니다."
}
console.log(ad(10))