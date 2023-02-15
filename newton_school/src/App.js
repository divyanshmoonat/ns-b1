import "./App.css";
import Greet from "./components/Greet/Greet";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

const App = () => {
  const users = [
    { fName: "John", lName: "Doe", age: 10 },
    { fName: "Ram", lName: "Prasad", age: 15 },
    { fName: "Peter", lName: "Parker", age: 22 },
  ];

  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
};

export default App;
