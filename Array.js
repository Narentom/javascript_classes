// let arr=[100,1.2,"pysp",true]
// console.log(arr);
// console.log("------------------------------------------------");

// const PromptSync = require("prompt-sync");


// // Array supports positive indexing only
// let pysp=['students','trackers','staffs','security','trainers']
// console.log('pyspider is having',pysp[1]);
// console.log('pyspider is having',pysp[4]);
// console.log("------------------------------------------------");


// // Finding the length of Array
// console.log("length of pysp: ",pysp.length);
// console.log("------------------------------------------------");



// // Changing the value of Array
// pysp[0]='naren'
// console.log("updateed pysp: ",pysp);
// console.log("------------------------------------------------");

// // Inserting a new value of Array
// pysp[5]='attenders'
// console.log(pysp);
// console.log("------------------------------------------------");


// // without using hardcore value
// pysp[pysp.length]='tommy'
// console.log(pysp);
// pysp[pysp.length]='tommy'
// console.log(pysp);
// console.log("------------------------------------------------");


// // Type of array
// console.log(typeof pysp);
// console.log("------------------------------------------------");


// // fetching the Array

// // With using for in method
// for (let i in pysp){
//     console.log(i,pysp[i])
// }
// console.log("-----------for in-------------------------------------");


// // With using for of method
// for (let i of pysp){
//     console.log(i);
// }
// console.log("------------------for of------------------------------");

// // with using foreach method
// pysp.forEach((item)=>{
//     console.log(item);
// })
// console.log("------------------foreach------------------------------");

// for (let i=0;i<pysp.length;i++){
//     console.log(pysp[i]);
// }
// console.log("------------------length------------------------------");


//built-in method
// let pysp=['students','trackers','staffs','security','trainers']

// //1. tostring()-converts all values into string of comma seperated
// console.log("1.Converted to string: ",pysp.toString());
// console.log("------------------------------------------------");

// // 2.join()-Joins all the Element of Array using  given seperator
// console.log("2.joined Array: ",pysp.join("$"));
// console.log("2.joined Array: ",pysp.join("%"));
// console.log("------------------------------------------------");

// // 3.pop()-Delete the last value from the array and returns it
// console.log("staffs");
// let lastValue=pysp.pop();

// 4.push()-Add an element at the end of array and return the length og updated array
// console.log(pysp);
// let x=pysp.push('dsfsgdfsg')
// console.log(pysp);


// 5.shift()-Remove first element from the array and returns it.

// console.log(pysp);
// let x=pysp.shift('dsvdfsgsd')
// console.log(pysp);

// 6.unshift()-Add element at the beginning 
// console.log(pysp);
// let x=pysp.unshift('dsvdfsgsd')
// console.log(pysp);


// 7.slicing()-
// console.log('slicing array: ',pysp.slice(1,3));

// 8.delete()-
// console.log('delete array',delete pysp[2]); returns bool value only
// console.log("updated pyspider: ",pysp);

// 9.conact()-combine the given array
// let branch =['badbffdg','fdgdfgdd','gdfbdggdtg']
// let ins=['fgvdv','fgddfgg','dfgdfd']
// let res=pysp.concat(branch,ins)
// console.log("concatenated array: ",res);
// console.log(typeof res);
// console.log("------------------------------------------");

// // 9.splice()-
// let deletedVal=res.splice(1,3,"hi",'hello','naren')
// console.log("deleted values: ",deletedVal);
// console.log("splice array: ",res);
// console.log("------------------------------------------");

// // 10.sort()-
// res.sort()
// console.log("sorted array: ",res);
// let num=[111,222,88,34,25,98,100]
// console.log(num.sort());
// console.log("------------------------------------------");

// // call back function
// let sorted=num.sort((a,b)=>{
//     return b-a
// })
// console.log(sorted);
// console.log("------------------------------------------");

// // 12.reverse()
// res.reverse()
// console.log("reversed array: ",res);
// console.log("------------------------------------------");


// // Higher ordered
// let prompt=require("prompt-sync")({sigint:true})
// let n=prompt("Enter your number: ")
// let num=[]
// for(let i=0;i<n;i++){
//     num.push(i)
// }
// console.log('Nums: ',num);

// // 1.Map()- it iterats only values
// num.map((Element)=>{
//     console.log("Numbers: ",Element);
// })
// console.log("------------------------------------------");

// Filter()-
// let even =num.filter((Element)=>{
//     // return Element%2==0
//     return Element>5
// })
// console.log("Even number: ",even);
// console.log("------------------------------------------");

// reduce()
// let result=num.reduce((acc,currVal)=>{
//     return acc+currVal
// })
// console.log("reduce value of array: ",result);


let prompt=require("prompt-sync")({sigint:true})
let n=prompt("Enter your number: ")
var num=[]
for(let i=1;i<=n;i++){
        num.push(i)
}
console.log('Nums: ',num);

let cubearr=num.map((item)=>{
    return item**3
})
console.log(cubearr);
let oddarr=cubearr.filter((item)=>{
    return item%2 !==0
})
console.log(oddarr);
let prodarr= oddarr.reduce((a,b)=>{
    return a*b
})
console.log(prodarr);



         
 


















