interface MyInterface {
    method1() :void;
    method2(arg1:string,arg2:number) :string
}
class MyClass implements MyInterface {
    method1(){
        console.log("안녕")
    }
    method2(arg1:string, arg2:number) {
        return `${arg1} ${arg2}`
    }
}

interface MyFunc {
    (arg1:string, arg2:number):string;
}
let myFunc: MyFunc =(arg1:string, arg2:number) =>{
    return `${arg1} ${arg2}`
}