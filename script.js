// 1.Her hansı bir stringin içərisindəki yazıları söz sırası və hərf sırası daxil olmaqla tərs yazdıran bir function yazın;
// let fullName= "Gunel Humbatova";
// function Reverse(value) {
//     for (let index = value.length; index >= 0; index--) {
//         console.log(value[index]);
//     }
// }
// Reverse(fullName);

//2.map,reduce,filter,every,find,foreach,ve.s kimi hazir iterationlar istifade etmesek onlarin gorduyu ishleri arxa planin yazin;

let arr = [1,2,3,5,9,5,6,8];

//******** map **********
// arr.forEach(element => {
//     console.log(element*=2);
// });

//********* reduce ***********
// let total = 0;
// arr.forEach(element => {
//    total+=element;
// });
// console.log(total); 


//************ filter ***************
// arr.forEach(element => {
//     if (element>3) {
//         console.log(element);
//     }
// });


//************* find  **************

//  for (let index = 0; index < arr.length; index++) {
//      if (arr[index] > 2) {
//          console.log(arr[index]);
//          break;
//      }
//  }


//*********** every ***********
let condition=false;
for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (element>2) {
        condition=true;
    }
}
console.log(condition);
