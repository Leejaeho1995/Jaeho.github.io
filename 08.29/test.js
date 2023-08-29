//동물 .. 이름 / 메소드 ->소리를 내다
//개 ..동물 --> 이름 ,품종, 짖다

class Animal{
    constructor(name){
        this.name= name
    }
    speak(){
        console.log(`${this.name}가(이)소리를 내고있다.`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed =breed
    }
    speak(){
        console.log(`${this.breed} 종류의 ${this.name}이(가) 멍멍하고 있다`)
    }
}
const animal= new Animal('동물')
animal.speak()
const dog= new Dog('메리','시츄')
dog.speak()

function first(){
    second()
    console.log("첫번째 실행.")
}
function second(){
    third()
    console.log("두번째 실행.")
}
function third(){
    console.log("세번째 실행.")
}
first()