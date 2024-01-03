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
  const todoList = InitialToDo;

  return (
    <div>
      <form>
        <h1>Daily To Do List</h1>

        <input />
        <button />
        <ul>
          {todoList.map((list) => (
            <TodoList text={list.text} />
          ))}
        </ul>
      </form>
    </div>
  );
}

function TodoList({ text }) {
  return <li>{text}</li>;
}

function Button({ children }) {
  return <button>{children}</button>;
}
