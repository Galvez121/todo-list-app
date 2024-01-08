import { useState } from "react";
import "./index.css";

const InitialToDo = [
  {
    id: 1,
    text: "Clean",
    done: true,
  },

  {
    id: 2,
    text: "Work out",
    done: false,
  },
];

export default function App() {
  // Todo items list that will be created and handle by the user
  const [todoItem, setTodoItem] = useState([]);

  function handleTodoItem(toDo) {
    setTodoItem((todoItems) => [...todoItems, toDo]);
  }

  function handleToggle(id) {
    setTodoItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  //Reset Function
  function handleResetButton() {
    setTodoItem([]);
  }

  // It will delete only the task that are done
  function handleDeleteCompleted(id) {
    // Filter out the items that are not done (selected)
    const updatedTodoItems = todoItem.filter((item) => !item.done);

    // Update the todoItem state with the filtered items
    setTodoItem(updatedTodoItems);
  }

  return (
    <main>
      <ToDoForm
        todoItem={todoItem}
        onTodoItem={handleTodoItem}
        onHandleToggle={handleToggle}
      />
      <div className="clearButtons">
        <Button onClick={handleDeleteCompleted}>Clear Finished</Button>
        <Button onClick={handleResetButton}>Clear All</Button>
      </div>
    </main>
  );
}

function ToDoForm({ todoItem, onTodoItem, onHandleToggle }) {
  // Try data
  // const todoList = InitialToDo;

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // If there is not data just return the function ( That is how you do not create empty items in the from)
    if (!text) return;

    // New object will be created
    const newTodoItem = { text, done: false, id: Date.now() };

    onTodoItem(newTodoItem);
    setText("");
  }

  return (
    <div className="todoForm">
      <form name="listItemForm" onSubmit={handleSubmit}>
        <h1>Daily To Do List</h1>

        <div className="inputContainer">
          <input
            className="textBar"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="addButton">Add</button>
        </div>
        <ul>
          {todoItem.map((list) => (
            <TodoList
              listItem={list}
              key={list.id}
              onToggleItem={onHandleToggle}
            />
          ))}
        </ul>
      </form>
    </div>
  );
}

// List items
function TodoList({ listItem, onToggleItem }) {
  return (
    // I will create the item depending on a list
    <li>
      <input type="checkbox" onChange={() => onToggleItem(listItem.id)} />
      <span style={listItem.done ? { textDecoration: "line-through" } : {}}>
        {listItem.text}
      </span>
    </li>
  );
}

function Button({ onClick, children }) {
  return (
    <button className="clearAllButton" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
