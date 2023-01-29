// console.log("OOP");

const car = {
  maker: "Tata",
  model: "Harrier",
  engineType: "Petrol",
  noOfDoors: 4,
  manufacturingYear: 2020,
  color: "White",
  topSpeedInKmph: 200,
};
// console.log(car);

const students = {
  name: "",
  address: "",
  mobileNo: "",
};

class Vehicle {
  // Parent class
  constructor(noOfWheels, type) {
    this.noOfWheels = noOfWheels;
    this.type = type;
  }
}

class Car extends Vehicle {
  // Child class
  constructor() {
    super(4, "Car (SUV)"); // To initialize the parent class from Child
    // A function to initialize all the data (variables)
    this.maker = "Tata";
    this.model = "Harrier";
    this.engineType = "Petrol";
    this.noOfDoors = 4;
    this.manufacturingYear = 2020;
    this.color = "White";
    this.topSpeedInKmph = 200;
  }

  getInfo() {
    // Tata Harrier Petrol was manufactured in 2020 with a top speed of 200 KMPH.
    console.log(
      `${this.maker} ${this.model} ${this.engineType} was manufactured in ${this.manufacturingYear} with a top speed of ${this.topSpeedInKmph} KMPH`
    );
  }

  startCar() {
    /**
     * 1. Turn the key on
     * 2. Connects the circuit, current starts flowing
     * 3. It generates a spark
     * 4. Ignites the fuel (Petrol/Diesel)
     * 5. Fuel starts flowing to the engine
     * 6. By ignition, pressure is generated
     * 7. Piston starts rotating
     */
    console.log("Car started...");
  }
}

class Bike extends Vehicle {
  constructor() {
    super(2, "Bike");
    this.maker = "Yamaha";
    this.model = "R15";
  }
}

class ChildCar extends Car {
  // Grand Child
  constructor() {
    super();
  }
}

const myCar = new Car(); // Create an instance of class(Object of class)
console.log(myCar);
myCar.startCar(); // Abstraction
// myCar.getInfo();

const bike = new Bike();
console.log(bike);

// const cc = new ChildCar();
// console.log(cc.type);

const bikeMixin = {
  getBikeDetails() {
    console.log(`${this.maker} ${this.model}`);
  },
};

class NewChild extends Car {
  constructor() {
    super();
  }
}

const newChild = new NewChild();
Object.assign(newChild, bikeMixin);
console.log(newChild);

class ATM {
  constructor() {
    //
  }

  withdrawMoney(amount) {
    if (pin !== "1234") {
      alert("Incorrect PIN, please try again");
    }
    if (amount > this.accountBalance) {
      alert("Insufficient funds in your account");
    }
    if (noOfTransactions > 10) {
      alert("You have exceeded withdrawls for this month");
    }
    if (amount > availAmountInAtm) {
      alert(
        "Unable to dispense requested amount, please try multiples of 100 and 500"
      );
    }
  }
}

const atm = new ATM();
atm.withdrawMoney(1000);

/**
 * Mobile - Encapsulation
 * Making a call - Abstraction
 */