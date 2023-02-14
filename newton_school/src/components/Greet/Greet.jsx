import "./Greet.css";

const Greet = ({ fName, lName, age }) => {
  const myStyles = { fontSize: "50px", textAlign: "center" };
  let greetClasses = "";
  if (age <= 10) {
    greetClasses = "red";
  } else if (age > 10 && age <= 20) {
    greetClasses = "green";
  } else {
    greetClasses = "blue";
  }

  const getGreetText = (age) => {
    let greetText = "";
    if (age <= 10) {
      greetText = "Hi";
      myStyles.color = "#ff0000";
    } else if (age > 10 && age <= 20) {
      greetText = "Hello";
      myStyles.color = "#00ff00";
    } else {
      greetText = "Namaste";
      myStyles.color = "#0000ff";
    }
    return greetText + " ";
  };

  return (
    <>
      <h1 className={`greet-text ${greetClasses}`}>
        {/* {age <= 10 ? "Hi" : age > 10 && age <= 20 ? "Hello" : "Namaste"}&nbsp; */}
        {getGreetText(age)}
        {fName} {lName}, welcome to Newton School, Age: {age}
      </h1>
      <span>Child2</span>
    </>
  );
};

export default Greet;

// Age 0-10 : Hi
// Age 10-20  : Hello
// Age 20+   : Namaste

// Hi John Doe, welcome to Newton School, Age : 10
// Hello Ram Prasad, welcome to Newton School : Hello
// Namaste Peter Parker, welcome to Newton School : Hello

// const greetUser = (fName, lName) => {
//   let fullName;
//   fullName = fName + lName;
//   return "Hello " + fullName;
// };
