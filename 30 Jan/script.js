// console.log("Promises");

/**
 * Syntax : new Promise(callbackFn)
 * callbackFn : (resolve, rejecect)
 */

// let age = prompt("Enter your age");
// age = Number(age);
let age = 20;

const promise = new Promise((resolve, reject) => {
  //   console.log("Hello, this message is from Promise");
  setTimeout(() => {
    // console.log("Console after 5 seconds");
    if (age > 18) {
      resolve("You can give a vote");
    } else {
      reject("You can't vote");
    }
  }, 5000);
  //   resolve(user); // resolve work as return statement only for "SUCCESS CASES"
  //   reject("Promise rejected due to an error"); // reject also works as return statement only for "ERROR CASES"
});

console.log(promise);
/**
 * <promise-name>
 * .then(fulfilledCallbackFn)
 * .catch(rejectedCallbackFn)
 */

// console.log("A");
// promise
//   .then((resolvedValue) => {
//     // console.log("Value after promise is resolved", resolvedValue);
//     // console.log(promise);
//     console.log("B");
//   })
//   .catch((rejectedValue) => {
//     // console.log("Value after promise is rejected", rejectedValue);
//     console.log("D");
//   });
// console.log("C");

// CALLING AN API
// fetch("https://jsonplaceholder.typicode.com/todos/")
fetch(
  "https://api.spoonacular.com/recipes/716429/information?apiKey=1576e9db9eb84e5d834b5b5554c5252a&includeNutrition=true"
)
  .then((res) => res.json())
  .then((todoItems) => {
    console.log(todoItems);
    const myList = document.getElementById("todoList");
    todoItems.forEach((todo) => {
      //   console.log(todo.title);
      const li = document.createElement("li");
      li.innerText = todo.title;
      if (todo.completed) {
        li.classList.add("completed");
      }
      myList.append(li);
    });
  })
  .catch((error) => {
    console.log("ERROR IN API CALL", error);
  });
