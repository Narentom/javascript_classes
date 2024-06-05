// if condition
// let prompt=require ("prompt-sync")({sigint:true}) 
// let speed=prompt("enter the vehicle speed:")
// if(speed>0 && speed<=60){
//     console.log(`your speed is ${speed}, go slowly `)
// }
// else if(speed>60 && speed<=110){
//     console.log(`your speed is ${speed},going good..maintaing same speed`)
// }
// else if(speed>120 && speed<=200){
//     console.log(`${speed} you're in danger`)
// }
// else{
//     console.log(`your are in heaven`);
// }


// switch case
let date  = new Date()
console.log(date)
let day=date.getDay()
console.log(day)
switch (day) {
    case 0:
        console.log("Today is sunday")
        break
    case 1:
        console.log("Today is monday")
        break
    case 2:
        console.log("Today is tuesday")
        break
    case 3:
        console.log("Today is wednesday")
        break
    case 4:
        console.log("Today is thursday")
        break
    case 5:
        console.log("Today is friday")
        break
    case 6:
        console.log("Today is staurday")
        break
    default:
        console.log("day is not matching")
}