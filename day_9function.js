// function doorbell(){
//     console.log("ding ding")
//     console.log("yes... who is this")
// }
// doorbell()
// doorbell()
// doorbell()

// let prompt=require ("prompt-sync")({sigint:true})
// let name=prompt("what is your name: ")
// function greet(name){
//     console.log(`Hello ${name}, Good morning`)
// }
// greet("naren")
// greet("sai")

// function 2 arugument 2 parameter

// function userinfo(name,place){
//     console.log(`username is ${name} and his place is ${place}`)
// }
// userinfo('Naren','Tamilnadu')



// write a function to perform arithmetic opreation

// let prompt=require ("prompt-sync")({sigint:true})
// let num=prompt("Enter the num: ")
// let num1=prompt("Enter the num: ")
// function task(){
//     add=num+num1
//     console.log(`addition value is ${add}`)
//     sub=num-num1
//     console.log(`subraction value is ${sub}`)
//     mul=num*num1
//     console.log(`multiple value is ${mul}`)
//     div=num/num1
//     console.log(`division value is ${div}`)
//     mod=num%num1
//     console.log(`modulus value is ${mod}`)
// }
// task()


// reciving a multiple arguments
function addnums(...nums){
    let sum=0
    for (i of nums){
        sum+=i
    }
    console.log(`sum of the numbers is ${sum}`)
}
addnums(1,2,3,4,5,6,7,8,9,10)


// 2.Anonymous function
// let product=function(...num){
//     let res=1
//     for (i of num){
//         res*=i
//     }
//     console.log(`product is ${res}`)
// }
// product(1,2,3,4,5,6,7,8,9)

// 3.Arrow function
// let add=(a,b)=>{
//     return a+b

// }
// let addition=add(3,4)
// console.log(`The value of addition is ${addition}`)

// 4.builtin function

// 5.IIFE
// let iife= (function(){
//     console.log("This is IIFE funtion")
// })()

