// const rabiit ={
//     type:'토끼',
//     name:'빙키',
//     sound:'깡총',
//     say(){
//         console.log(this.sound)
//     }
// }
// const frog  ={
//     type:'개구리',
//     name:'개리',
//     sound:'개굴',
//     say(){
//         console.log(this.sound)
//     }
// }
function Animal(type,name,sound){
    this.type=type
    this.name=name
    this.sound=sound
    this.say= function(){
        console.log(this.sound)
    }
}
const rabbit =new Animal('토끼','빙키','깡총')
const frog = new Animal('개구리','개리','개굴')

console.log(rabbit.say())
console.log(frog.say())


class Car{
    constructor(maker,model,year){
        this.maker=maker
        this.model=model
        this.year=year
        this.speed=0
    }
    accel(){
        this.speed +=10
        console.log(`악셀을 밟았습니다. :시속 ${this.speed}km/h`)
    }
    break(){
        if(this.speed >0){
            this.speed -=10;
            console.log(`브레이크를 밟아 속도가 줄었습니다.:시속${this.spped}km/h`)
        }else{
            console.log('자동차가 정지해 있습니다.')
        }
    }
    getState(){
        console.log(`메이커:${this.maker},모델명:${this.model},년식:${this.year},현재속도:${this.speed}km/h`)
    }
}
//기아 k5 인스턴스 생성
const kiaCar= new Car('kia','k5',2017)
kiaCar.getState()
kiaCar.accel()
kiaCar.accel()
kiaCar.accel()

class 붕어빵틀{
    constructor(재료,크기){
        this.재료=재료
        this.크기=크기

    }
    굽기(){
        console.log(`${this.크기} 크기의${this.재료}을 속으로 넣은 붕어빵`)
    }
}
const 팥붕어빵=new 붕어빵틀('팥','작은')
const 슈크림붕어빵 =new 붕어빵틀('슈크림','큰')
팥붕어빵.굽기()
슈크림붕어빵.굽기()

class Fruit{
    constructor(name){
        this.name=name
    }
    static sayYum(){
        console.log('냠냠')
    }
    sayYum2(){
        console.log('와구ㅠ와구')
    }
}
Fruit.sayYum()
const apple= new Fruit('사과')
apple.sayYum2()