import "./App.css";
import Greet from "./components/Greet/Greet";

const App = () => {
  const users = [
    { fName: "John", lName: "Doe", age: 10 },
    { fName: "Ram", lName: "Prasad", age: 15 },
    { fName: "Peter", lName: "Parker", age: 22 },
  ];

  return (
    <div className="App">
      {users.map((user) => (
        <Greet key={user.fName} {...user} />
      ))}
    </div>
  );
};

export default App;
