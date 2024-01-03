# React ToDo App

This is a simple React ToDo application where you can create and manage your daily tasks.

## Usage

- Add new tasks to your daily to-do list.
- Mark tasks as done by checking the checkboxes. (Not implemented)
- Use the provided buttons for additional actions. (Not implemented)

## Components

### App

The main component that renders the ToDoForm and buttons.

### ToDoForm

Handles the creation and display of ToDo items.

### TodoList

Renders individual ToDo items.

### Button

Generic button component.

## Functions

### `handleToggle(id)`

The `handleToggle` function is responsible for toggling the `done` property of a ToDo item identified by its `id`.

```javascript
function handleToggle(id) {
  setTodoItem((items) =>
    items.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
  );
}
```

- **Explanation:**

  - `setTodoItem` is used to update the `todoItem` state. It takes a function as an argument, which receives the current state (`items`) and returns the new state.

  - `items.map((item) => ...)` is used to create a new array with updated ToDo items. It iterates over each item in the current state array.

  - Inside the `map` function, a ternary operator is used to check if the current item's `id` matches the provided `id`.

    - If the ids match, the item is updated using the spread operator (`{ ...item }`), and the `done` property is toggled using `!item.done`.
    - If the ids don't match, the item remains unchanged.

  - The new array of ToDo items is then set as the updated state using `setTodoItem`.

- This function essentially flips the `done` property of a specific ToDo item identified by its `id`, indicating whether the task is done or not. It is likely used in conjunction with the `onChange` event in the `TodoList` component to update the state when a user interacts with the checkbox.
