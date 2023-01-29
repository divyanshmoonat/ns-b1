// console.log("OOP2");
console.log(5 + 5); // Mathematical Addition

console.log("5" + "5"); // String concatenation

console.log("5" + 5); // String concatenation

console.log(5 + 5 + "5");
            // 10    + "5"

            // 2 == "2"

class A {
  constructor() {}

  add() {
    console.log("Add method from class A");
  }
}

class B extends A {
  constructor() {
    super();
  }

  //   add() {
  //     console.log("Add method from class B");
  //   }

  calculateArea(radius) {
    // Calculate the area of circle (PI * r * r)
    console.log("Area of circle : ", 3.14 * radius ** 2);
  }

  calculateArea(l, b) {
    // Calculate the are of rectangle (l x b)
    console.log("Area of rectangele : ", l * b);
  }
}

const b = new B();
b.add();
b.calculateArea(20, 15);
