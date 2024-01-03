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

  return (
    <main>
      <ToDoForm
        todoItem={todoItem}
        onTodoItem={handleTodoItem}
        onHandleToggle={handleToggle}
      />
      <Button>3 item Selected</Button>
      <Button onClick={handleResetButton}>Clear All</Button>
    </main>
  );
}

function ToDoForm({ todoItem, onTodoItem, onHandleToggle }) {
  // Try data
  // const todoList = InitialToDo;

  // // Todo items list that will be created and handle by the user
  // const [todoItem, setTodoItem] = useState([]);

  // function handleTodoItem(toDo) {
  //   setTodoItem((todoItems) => [...todoItems, toDo]);
  // }

  // const [text, setText] = useState("");

  // function handleToggle(id) {
  //   setTodoItem((items) =>
  //     items.map((item) =>
  //       item.id === id ? { ...item, done: !item.done } : item
  //     )
  //   );
  // }

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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Daily To Do List</h1>

        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button />
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
  return <button onClick={onClick}>{children}</button>;
}
