// function reverse_num(num){
//     let rnum =0
//     while(num !=0){
//         runm= (rnum * 10) + num % 10
//         num= Math.floor(num /10)
//         console.log("변수:"+ rnum)
//         console.log("받은수:"+num)
//     }
//     return runm
// }
// console.log(reverse_num(123456))

/*1번문제*/
function reverse_num(num){
    num = num + ""
    return num.split("").reverse().join("")
}
console.log(reverse_num(1234567))


// function substrings(str){
//     let array1= []
//     for(let x=0,y=1;x<str.length;x++,y++){
//         array1[x]=str.substring(x,y)
        
//     }
//     let combi = [];
//     let temp = "";
//     let slent = Math.pow(2,array1.length)
//     for(let i=0;i< slent;i++){
//         temp =""
//         for(let j=0;j<array1.length;j++){
//             if((i&Math.pow(2,j))){
//                 temp + array1[j]
//             }
//         }if(temp !==""){
//             combi.push(temp)
//         }
//     }
//     console.log(combi.join("dog"))
// }



/*2번문제 */
function substrings(str){
    const result = []
    function search_combi(start,curr){
        if(curr.length > 0){
            result.push(curr)
        }
        for(let i=start;i<str.length;i++){
            search_combi(i+1,curr+str[i])
        }
    }
    search_combi(0,'')
    return result
}
/*3번문제 */
console.log(substrings("dogs"))

function reverse_alphabet(str){
    return str.split("").sort().join("")
}
console.log(reverse_alphabet("webmaster"))


function first_upper(text){
    let words = text.split(" ")
    for(let i=0; i<words.length;i++){
        words[i]= words[i].charAt(0).toUpperCase() + words[i].slice[1]
    }
    return words.join(" ")
}
console.log(first_upper("the quick brown fox"))

function vowel_count(str){
    let vowel = 'aeiouAEIOU'
    let vcount = 0
    for(let i=0;i<str.length;i++){
        if(vowel.indexOf(str[i])!==-1){
            vcount +=1
        }
    }
    return vcount
}
console.log(vowel_count("hi,my name is james dean"))