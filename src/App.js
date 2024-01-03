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
  return (
    <main>
      <ToDoForm />
      <Button>3 item Selected</Button>
      <Button>Clear All</Button>
    </main>
  );
}

function ToDoForm() {
  // Try data
  // const todoList = InitialToDo;

  // Todo items list that will be created and handle by the user
  const [todoItem, setTodoItem] = useState([]);

  function handleTodoItem(toDo) {
    setTodoItem((todoItems) => [...todoItems, toDo]);
  }

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // If there is not data just return the function ( That is how you do not create empty items in the from)
    if (!text) return;

    // New object will be created
    const newTodoItem = { text, done: false, id: Date.now() };

    handleTodoItem(newTodoItem);
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
            <TodoList text={list.text} />
          ))}
        </ul>
      </form>
    </div>
  );
}

// List items
function TodoList({ text }) {
  return (
    // I will create the item depending on a list
    <li>
      <input type="checkbox" />
      {text}
    </li>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
