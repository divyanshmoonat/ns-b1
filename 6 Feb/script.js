// console.log("Axios");

// axios
//   .get("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function getComments() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// getComments();

// const commentsAPI = axios.get("https://jsonplaceholder.typicode.com/comments"); // 1Sec
// const postsAPI = axios.get("https://jsonplaceholder.typicode.com/asdfasdf"); // 1.2Sec
// const albumsAPI = axios.get("https://jsonplaceholder.typicode.com/albums"); // 0.8Sec
// const photosAPI = axios.get("https://jsonplaceholder.typicode.com/photos"); // 2Sec

/**
 * Promise.all -> Helps is aggregating the result (fulfilled/rejected) of multiple promises used together
 * Syntax : Promise.all([promises])
 */

// const arrayOfPromises = [commentsAPI, postsAPI, albumsAPI, photosAPI]; // Array of promises

// Promise.allSettled(arrayOfPromises)
//   .then((response) => {
//     console.log("RESPONSE OF PROMISE ALL", response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//   .finally((data) => {
//     console.log("FROM FINALLY BLOCK", data);
//   });

//-------------------CURRYING------------------

// Non Curried Sum Function
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

// console.log(sum(4, 5, 3));
const result = sum(4, 5, 3);
// console.log(result);

// Curried Sum Function

// function sumC(num1) {
//   return function (num2) {
//     return function (num3) {
//       return num1 + num2 + num3;
//     };
//   };
// }

const sumC = (num1) => (num2) => (num3) => num1 + num2 + num3;

const f1 = sumC(10);
// console.log(f1); // f1 is a function

const f2 = f1(5);
// console.log(f2); // f2 is also a function

const f3 = f2(2);
// console.log(f3);

const resultC = sumC(10)(5)(1); // Calling a curried function
console.log(resultC);

const mySum = sumC(20)(10);
console.log(mySum(20));
console.log(mySum(1));
console.log(mySum(5));


// function add() {
//     let a = 10;
//     return function() {
//         console.log(a);
//     }
// }

// add()();