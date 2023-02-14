import "./App.css";
import Greet from "./components/Greet/Greet";
import Header from "./components/Header/Header";

const App = () => {
  const users = [
    { fName: "John", lName: "Doe", age: 10 },
    { fName: "Ram", lName: "Prasad", age: 15 },
    { fName: "Peter", lName: "Parker", age: 22 },
  ];

  return (
    <div className="App">
      <Header />
      <ul>
      {users.map((user,index) => (
        // <Greet key={user.fName} {...user} />
        <li key={"location"+index+1}>{user.fName}</li>
      ))}

      </ul>
    </div>
  );
};

export default App;
