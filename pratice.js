// let prompt = require("prompt-sync") ({sigint:true})
// let n=prompt("Enter the value n: ")
// for(i=1;i<=n;i++){
//     if (i%7==0){
//         console.log(i)
//     }
// }
// console.log(`sum of n is ${i+i}`)

// let prompt = require("prompt-sync") ({sigint:true})
// let n = parseInt(prompt("Enter the value n: "))
// let sum=""
// let b=1
// for (i=1;i<=n;i++){
//     b*=i
//     sum+=String(i)+"*"
    
// }

// console.log(sum);
// console.log(b)


// let prompt =require("prompt-sync")({sigint:true})
// let n=parseInt(prompt("enter total value:"))
// car={}
// for (let i = 1; i <=n; i++) {
//    carbrand= prompt(`enter the carbrand name ${i} :`)
//    carname=prompt(`enter the carname ${i}:`)
//    car[carbrand]=carname
    
// }
// for (const y in car) {
//     console.log(`${car[y]} belongs to ${y}`);
        
//     }

// function addnum(...num){
//     let sum=0
//     for (i of num){
//         sum+=i
        
//     }
//     console.log(`${sum}`);    
// }
// addnum(1,2,3,4,5,6,7,8,9)    

// function product(...num){
//     let product=1
//     for(i of num){
//         product*=i
//     }
//     console.log(`${product}`);
// }
// product(1,2,3,4)

// function sub(...num){
//     let sub=1
//     for (i of num){
//         sub-=i
//     }
//     console.log(`${sub}`);
// }
// sub(4,3,2,1)

// function div(...num){
//     let div=0
//     for (i of num){
//         div+=i
//     }
//     console.log(`${div}`);
// }
// div('naren','ajak','ajay','leo')


let add=(a,b,c)=>{
    return a+b-c
}
console.log(add(3,4,1));


let prompt=require ('prompt-sync')({sigint:true})
let n=prompt("Enter the value of N: ")
car={}
for (let i=1;i<=n;i++){
    carbrand=prompt(`Enter the carband ${i}:` )
    carname=prompt(`Enter the carname ${i}:` )
    car[carbrand]=carname
}
console.log(car);
console.log(`${carname} belongs to ${carbrand}`);

