const Greet = ({ fName, lName, age }) => {
  const getGreetText = (age) => {
    let greetText = "";
    if (age <= 10) {
      greetText = "Hi";
    } else if (age > 10 && age <= 20) {
      greetText = "Hello";
    } else {
      greetText = "Namaste";
    }
    return greetText + " ";
  };
  return (
    <h1>
      {/* {age <= 10 ? "Hi" : age > 10 && age <= 20 ? "Hello" : "Namaste"}&nbsp; */}
      {getGreetText(age)}
      {fName} {lName}, welcome to Newton School, Age: {age}
    </h1>
  );
};

export default Greet;

// Age 0-10 : Hi
// Age 10-20  : Hello
// Age 20+   : Namaste

// Hi John Doe, welcome to Newton School, Age : 10
// Hello Ram Prasad, welcome to Newton School : Hello
// Namaste Peter Parker, welcome to Newton School : Hello
