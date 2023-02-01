// console.log("setInterval etc");

function A() {}
function B() {}
function C() {}

B.prototype = Object.create(A.prototype); // Prototypal ineritance
B.prototype.constructor = B; // Resetting the constructor

// const b = new B();
// // console.log(b);

// const c = new C();
// console.log(c);

// --------------------------------------

// Write hello 25 times in the console, where each hello is printed after 1 second of the previous one

// Sol : setInterval
// for (let i = 1; i < 11; i++) {
//   setTimeout(() => {
//     console.log(i, "hello");
//   }, i * 1000);
// }

/**
 * setInterval(callbackFn,timeInMilliSeconds)
 * clearInterval(interval variable)
 */

// let counter = 1;
// let interval = setInterval(() => {
//   if (counter >= 25) {
//     // Stop the interval
//     clearInterval(interval);
//   }
//   console.log(counter, "Hello");
//   counter++;
// }, 1000);

// const timerSpan = document.getElementById("timer");

// console.log("A");
// let int = 10;
// const timerInterval = setInterval(() => {
//   if (int <= 0) {
//     clearInterval(timerInterval);
//     alert("Show started..");
//   }

//   timerSpan.innerText = int;
//   int--;
// }, 1000);

// console.log("B");

const a = {
  num: 123,
};

const b = {
  num: 456,
};

const key1 = {
  num: 123,
}; // [object Object]
const key2 = {
  num: 456,
}; // [object Object]

const user = {
  name: "Alex",
  age: 40,
  [key1]: "Object as a key",
};

user[key2] = "Another object as a key";

// user['name'] = "John";

// a = [object Object]
// user[a] = "Object as a key";

// b = [object Object]
// user[b] = "Another object as a key";
console.log(user);

const userMap = new Map();
userMap.set("name", "Alex");
userMap.set("age", 40);
userMap.set(key1, "Object as a key");
userMap.set(key2, "Another object as a key");
console.log(userMap);

//-------------------------------------------------------

// const dataToSend = {
//   data1: {
//     title: "My new Instagram Post!",
//     description: "This is the description of my first post on Instagram",
//   },
//   data2: {
//     name: "ABCD",
//   },
// };

const dataToSend = new FormData();
dataToSend.append("title", "My new Instagram Post!");
dataToSend.append(
  "description",
  "This is the description of my first post on Instagram"
);

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  //   body: JSON.stringify(dataToSend),
  body: dataToSend,
  headers: {
    // "content-type": "application/json", // This header contains the information about the type of data being sent
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
