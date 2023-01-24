// console.log("Revision Session 2");

// let users = ["A", "B", "C", "D"];
// // users.getItem();
// console.log(users);

// let human = {
//   hands: 2,
//   eyes: 2,
// //   introduce: () => {
// //     console.log("Hello I'm a Human");
// //   },
// };

// let person = {
//   name: "Dwayne",
//   __proto__: human,
// };

// console.log(human);
// human.introduce();
// console.log(person);
// person.introduce();

// let person2 = {
//     name: "ABCD",
//     age: 10
// }
// console.log(person2);

// class Human {
//   constructor() {
//     this.eyes = 2;
//     this.hands = 2;
//   }
// }

// class Person extends Human {
//   constructor() {
//     super();
//     this.name = "ABCD";
//     this.age = 10;
//   }
// }

// let person = new Person();
// console.log(person);

/**
 * DOM (document)
 */

console.log(document);
/**
 * CRUD (Create Read Update Delete)
 */

//1. Get elements by tag name
let h1 = document.getElementsByTagName("h1");
console.log(h1);

let myArticles = document.getElementsByClassName("my-article");
console.log(myArticles);

let myHeading = document.getElementById("myHeading");
console.log(myHeading);

let paragraphs = document.querySelector(".my-article p");
console.log("Paragraphs", paragraphs);

let allParagraphs = document.querySelectorAll(".my-article p");
console.log("All paragraphs", allParagraphs);

let firstHeading = document.getElementById("firstHeading");
firstHeading.style.color = "blue";
firstHeading.innerText = "New Revision Session";

let myList = document.getElementById("myList");
// console.log(myList.innerText);
// console.log(myList.innerHTML);
// console.log(myList.textContent);
myList.innerHTML = `
    <li>Buy Groceries</li>
    <li>Play Games</li>
`;
// myList.innerText = `
//     <li>Buy Groceries</li>
//     <li>Play Games</li>
// `;

const h3 = document.createElement("h3");
h3.innerText = "A heading created using JavaScript DOM Methods";

// document.body.append(h3);

{
  /* <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg" /> */
}

const img = document.createElement("img");
img.src =
  "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg";

let h2 = document.getElementById("myHeading");
console.log(h2);
// document.body.append(h3, img);
document.body.insertBefore(img, h2);
// document.body.
// document.body.appendChild(img);
// document.body.appendChild(h3);

// h2.remove();

const article = document.getElementById("article");
article.classList.add("myCls4");
article.classList.remove("my-article");
console.log(article.classList);
