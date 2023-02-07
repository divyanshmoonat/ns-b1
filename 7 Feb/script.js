// console.log("JS Working");

function getAge() {
  console.log("Age function running");
  return 30;
}

function getName() {
  console.log("Name function running");
  return "Peter";
}

function describeUser() {
  let age = getAge();
  let name = getName();
  let description = `User ${name} is ${age} years old`;
  console.log(description);
}

// describeUser();

//-----------------------------------------

const student = {
  name: "Ram Prasad",
  address: "123, ABC Colony, New Delhi",
};

const student2 = {
  name: "Kishan",
  address: "456, XYZ Colony, Indore",
};

function describeStudent(std, age) {
  // Ram prasad lives at 123, ABC Colony, New Delhi and studies in 10 grade and they are 15 years old
  console.log(
    `${this.name} lives at ${this.address} and studies in ${std} grade and they are ${age} years old`
  );
}

// describeStudent();

// Bind: It returns a function, doesn't execute the function directly (this -> student)
// const bound = describeStudent.bind(student);
// bound();

// // this -> student2
// const bound2 = describeStudent.bind(student2);
// bound2();

// Call : It will supply this value as 1st argument and calls/execute the function
// Syntax: function.call(thisObject,...arguments)
// describeStudent.call(student, 10, 15);
// describeStudent.call(student2, 9, 16);

// Apply : It will supply this value as 1st argument and calls/execute the function
// Syntax: function.apply(thisObject,[arguments]);
// describeStudent.apply(student, [10, 15]);
// describeStudent.apply(student2, [9, 16]);

const users = ["A", "B", "C"];
const newUser = ["D", "E", "F"];

// users.push("D", "E", "F");
// users.push(newUser);

users.push.apply(users, newUser);

console.log(users);
