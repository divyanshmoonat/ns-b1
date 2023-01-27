// console.log("Mixins etc");
const myMixin = {
  describeUser() {
    // The user Ray Mysterio is a player of WWE
    console.log(
      `The user ${this.fName} ${this.lName} is a player of ${this.game}`
    );
  },
};

class User {
  constructor() {
    this.fName = "Ray";
    this.lName = "Mysterio";
    this.game = "WWE";
  }
  describeUser() {
    console.log("Describe method from class");
  }

  getName() {
    return this.fName;
  }

  setName(name) {
    this.fName = name;
  }

  getLName() {
    return this.lName;
  }

  setLName(lName) {
    this.lName = lName;
  }

  get fullName() {
    return `${this.fName} ${this.lName}`;
  }

  set fullName(name) {
    // console.log("The new name received is ", name);
    this.fName = name.split(" ")[0];
    this.lName = name.split(" ")[1];
  }
}

const user = new User();

// user.__proto__ = myMixin;
// Object.assign(user,myMixin);
// console.log(user);
// user.describeUser();

// GETTER AND SETTER
// console.log(user.fName);
// console.log(user.lName);
// user.fName = "Dave";
// console.log(user.fName);
// console.log(user);

const fn = user.getName();
// console.log(fn);
user.setName("XYZ");

// console.log(user);

const ln = user.getLName();
// console.log(ln);
user.lName = "ABCD";
// console.log(user);

// const fullname = user.fullName();
// console.log(fullname);

// console.log(user.fullName);
// console.log(user);

user.fullName = "John Doe";
// console.log(user);

// Property Descriptors

const user1 = {
  fName: "ABC",
  lName: "XYZ",
};
console.log(user1);

// console.log(user1.hasOwnProperty("address"));

const fNameDescription = Object.getOwnPropertyDescriptor(user1, "fName");

console.log(fNameDescription);

user1.fName = "DEF";
console.log(user1);

// user1.address = "123, ABC Street";
// console.log(user1);

// user1.address = "456, XYZ Street";
// console.log(user1);

/**
 * Syntax : Object.defineProperty(<obj-name>,<proerty-key>, <configuration-object>)
 */
Object.defineProperty(user1, "address", {
  value: "123 ABC Street",
  writable: false,
  enumerable: false,
});
console.log(user1);

user1.address = "456 XYZ Street";
console.log(user1);

const addressDescription = Object.getOwnPropertyDescriptor(user1, "address");
console.log(addressDescription);

user1.bloodGroup = "AB+";

for (let u in user1) {
  console.log(u);
}

function Person() {
  this.name = "John Doe";
}

const person = new Person();
console.log(person);
