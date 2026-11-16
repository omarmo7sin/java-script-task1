// 1.
// var c="123"
// console.log("the value is :" + (+c + 7))
///=========================================================
// 2.
// let x =0
// if(!x){
//     console.log("Invalid")
// }else {
//     console.log("x is true")
// }
///=========================================================

// 3.
// for (i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }
///=========================================================

// 4.
// let x =[1,2,3,4,5]
// let y =x.filter(x=>x%2==0)
// console.log(y)
///=========================================================

// 5.
// let x=[1,2,3,] ,z=[4,5,6]
// let y=[...x,...z]
// console.log(y)
///=========================================================

// 6.
// let x = 2;
// switch (x) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("tuesday");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday");
//     break;
//   case 7:
//     console.log("saturday");
//     break;
// }
///=========================================================

// 7.
// let x =["a", "ab", "abc"]
// let z= x.map(x => x.length)
// console.log(z)
///=========================================================

// 8.
// function isDivisibleBy( x){
//     if(x%3==0 && x%5==0){
//         console.log("divisible by 3 and 5")
//     }else{
//         console.log("not divisible by 3 and 5")
//     }
// }
// isDivisibleBy(2)

///=========================================================
// 9.
// let x= y=> y*y
// console.log(x(2))
///=========================================================
// 10.
// let person = {
//     name : 'omar',
//     age : 24
// };
// function getPersonDetails(person){
//     const {name,age} = person;
//     console.log(`${name} is ${age} years old`);
// }
// getPersonDetails(person);
///=========================================================
// 11.
// function sum(...numbers){
//     let total = 0;
//     for (let number of numbers){
//         total += number;
//     }
//     console.log(total);
// }
// sum(1,2,3)
///=========================================================
// 12.
// function message(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('success')
//         },3000)
//     })
// }
// message().then((result)=>{
//     console.log(result)
// })
///=========================================================
// 13.
// let nums = [1,3,7,2,4]
// function getLargestNumber(...nums){
//     let largest = nums[0];
//     for(y of nums){
//         if(y>largest){
//             largest = y;
//         }
//     }
//     console.log(largest);
// }
// getLargestNumber(...nums)
///=========================================================
// 14.
// function getKeys(x){
//     console.log(Object.keys(x));
// }
// let person = {
//     name : 'omar',
//     age : 24
// };
// getKeys(person)
///=========================================================
// 15.
// let x =["the quick brown fox"]
// function splitting(x){
//     let y = x[0].split(" ")
//     console.log(y)
// }
// splitting(x)
