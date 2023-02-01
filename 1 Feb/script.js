// console.log("Assignment Discussion");
// transform: translate(x,y)
// right => x++
// left => x--
// top => y--
// bottom => y++

// 1. Call the get to do items api
// 2. After the succesful retrieval of the list call get albums api

// function getToDoItems() {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((todosAPI) => todosAPI.json())
//     .then((todoItems) => {
//       console.log(todoItems);

//       fetch("https://jsonplaceholder.typicode.com/albums")
//         .then((albumsAPI) => albumsAPI.json())
//         .then((albumItems) => {
//           console.log(albumItems);
//         })
//         .catch((err) => {console.log(err)});
//     })
//     .catch((err) => {console.log(err)});
// }

// getToDoItems();

/**
 * Problem : Callback hell (Callback inside a callback..)
 * Solution : Async-Await
 */

async function getToDoItems() {
  try {
    const todosAPI = await fetch(
      "https://jsonplaceholder.typicode.com/todosasdfasdfasdf/"
    );
    const todoItems = await todosAPI.json();
    console.log(todoItems);

    const albumsAPI = await fetch(
      "https://jsonplaceholder.typicode.com/adsfasdfalbums"
    );
    const albumItems = await albumsAPI.json();
    console.log(albumItems);

    console.log("C");
  } catch (error) {
    console.log(error);
  }
  console.log("D");
}

// console.log("A");
// getToDoItems();
// console.log("B");

// console.log("1");
// try {
//   "hello".splice(1, 0, "a"); // Invalid line, error
//   //   [].splice(1, 0, "a"); // Valid line, no errors
// } catch (error) {
//   console.error(error);
// }
// console.log("2");
// console.log("3");

// var myMap = new Map();

// if (true) {
//   const key1 = {
//     num1: 123,
//   };

//   const key2 = {
//     num2: 456,
//   };
//   myMap.set(key1, "This is first object");
//   myMap.set(key2, "This is second object");
//   //   console.log(key1);
// }

// console.log(myMap);
// Strong binding

// Weak binding

var myWeakMap = new WeakMap();

if (true) {
  const key3 = {
    num1: 123,
  };
  const key4 = {
    num2: 456,
  };

  myWeakMap.set(key3, "This is first object");
  myWeakMap.set(key4, "This is second object");
}
// console.log(key3);
console.log(myWeakMap);
// console.log(myWeakMap.get(key3)); // Error
// Object.keys(yourObjec["Time Series (5min)"])