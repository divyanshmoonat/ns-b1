// console.log("Events");

// CLICK EVENT

// const theme = localStorage.getItem("theme");
// alert("Last chosen theme " + theme);
// localStorage.removeItem("theme");
// const btn = document.getElementById("btn");
// // console.log(btn);
// const onClick = (e) => {
//   //   e.stopPropogation(); // Stop event from bubbling up to the parent
//   alert("Hello there!");
//   localStorage.setItem("theme", "light");
//   btn.removeEventListener("click", onClick);
// };
// btn.addEventListener("click", onClick);

// // ONKEYUP EVENT
// let userInput;
// const onKeyUp = (e) => {
//   userInput = e.target.value;
//   console.log("Key preseed", e.target.value);
// };

// const input = document.getElementById("myInput");
// input.addEventListener("keyup", onKeyUp);

//Write a program which greets the user 5 seconds after they enter your website
// alert("Welcome there!");

// setTimeout(callbackFn,timeInMilliSeconds)

const greetUser = () => {
  alert("Welcome to NewtonSchool");
};

// setTimeout(greetUser, 2000);

// const numbers = [1, 2, 3];
// const users = ["ABCD", "BCSD", "CDSFD"];
// const products = [
//   { id: 1, name: "Mobile" },
//   { id: 2, name: "Headphones" },
// ];

class Cat {
  #ears; // Private property
  constructor() {
    // Initialize the data (variables)
    this.colorOfEyes = "Brown";
    this.breed = "ABCD";
    this.hasTail = true;
    this.#ears = 2;
  }

  describeCat() {
    // Function
    // This cat has Brown eyes and 2 ears.
    console.log(`This cat has ${this.colorOfEyes} eys and ${this.#ears} ears ${this.breed}`);
  }

  static greet(name) {
    console.log("Cat said hello to ", name, this.breed);
  }
}

const cat = new Cat(); // Creating instance or object of class
// console.log(cat.#ears);
cat.describeCat();
// cat.greet("John");
Cat.greet("John");
/**
 * Properties which can be accessed outside the class are called as public properties
 */
