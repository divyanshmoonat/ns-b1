// let userName = "John";
// let userName2 = "Alex";
// let userName3 = "Peter";
// let userName4 = "Peter";
// let userName5 = "Peter";
// let userName6 = "Peter";
// let userName7 = "Peter";
// let userName8 = "Peter";
// let userName3 = "Peter";
// let userName3 = "Peter";
// let userName3 = "Peter";

// console.log(userName, userName2, userName3)

// let userNames = [
//   "John",
//   "Alex",
//   "Peter",
//   "Tony Stark",
//   "Peter Parker",
//   "Jane",
//   "Thor",
//   "Bruce Wayne",
// ];
// // console.log(userNames);
// let myMapper = (arrayItem) => {
//   console.log("Hi " + arrayItem);
// };

// userNames.map(myMapper);

/**
 * firstName: "John"
 * lastName = "Doe"
 * mobileNo = "1234567890"
 * address = "123 ABC Street"
 * age = 30
 */

let student = {
  firstName: "John",
  lastName: "Doe",
  mobileNo: 1234567890,
  address: "123 ABC Street",
  age: 30,
};

console.log(student);

// let arr = [10, 50, 48, 68, 25, 35, "India"];
// // THIS IS WRONG WAY OF DEALARING ARRAY
// console.log(arr);

// var a = 10;
// var a = 20;
// console.log(a);

// let a = 10;
// let a = 20;
// console.log(a);

// function sum(a, b) {
//   let total = a + b;
//   return total;
// }

// ES6 Fn, Arrow Fns (Lambda Fns)
// let sum = (a, b) => a + b;

// console.log(sum);
// sum(10,20)

// let total = sum(10, 5);
// console.log(total);
// sum(2, 3);
// sum(157, 458);

let nums = [10, 25, 2, 5, 31, 15, 25, 17, 16, 45, 68];
// Write a program to get all the numbers greater than 20 and sotre them in a new array
// let myArrayFilter = (arrayItem) => {
//   if (arrayItem > 10) {
//     return true; // Consider this number
//   } else {
//     return false; // Ignore this number
//   }
// };

// let myArrayFilter = (arrayItem) => arrayItem > 10;

// let newArr = nums.filter(myArrayFilter);
// console.log(newArr);

/**
 * nums.<higher order function>(<callback-fn>)
 */
let myReducer = (total, arrayItem) => {
  return arrayItem + total;
};

// let total = nums.reduce(myReducer, 0);
// console.log(total);

// nums.map(() => {}).filter(() => {}).reduce(() => {})

let isEven = (number) => number % 2 === 0;

// Given an array find the sum of all even numbers
let numbers = [10, 14, 15, 17, 7, 5, 69, 15, 78, 51, 2];
let total = numbers.filter(isEven).reduce(myReducer);
Array.__proto__.myMethod = function () {};
// console.log("Event totals", total);
console.log(numbers);
