import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  //   let todoItems = []; // This will not trigger rerender
  let [todoItems, setToDoItems] = useState([]); // This will trigger a re render

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newItem = event.target.todoInput.value;
    // todoItems = [...todoItems, newItem]; // Adding new elements to an array with spread operator
    setToDoItems([...todoItems, newItem]);
    console.log(todoItems);
  };

  const onItemDelete = (event, index) => {
    console.log("Delete btn clicked", index);
    // Exercise : Delete the item from the array using index and ensure that a rerender is triggered
  };
  //   console.log("Component rendered");
  return (
    <div className="todo-list">
      <h3>ToDo List</h3>
      <form onSubmit={onFormSubmit}>
        <input
          name="todoInput"
          type={"text"}
          placeholder="Enter a to do item"
        />
        <input type={"submit"} value={"Add Item"} />
      </form>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index} id={index}>
            <span>{item}</span>
            {/* <button onClick={onItemDelete.bind(null, null, index)}>
              Delete
            </button> */}
            <button onClick={(event) => onItemDelete(event, index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
