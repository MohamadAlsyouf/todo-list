import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [hovered, setHovered] = useState(-1);

  const toggleDone = index => {
    setTodos(todos.map((todo, currentIndex) =>
      currentIndex === index
        ? {
          ...todo,
          done: !todo.done
          }
        : todo
    ))
  }

  // these two useEffect hooks persist the application state via localStorage
  useEffect(() => {
    const data = localStorage.getItem('todo-list');
    if (data) setTodos(JSON.parse(data));
  }, [])

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos))
  });

  const showTrashIcon = (index) => {
    setHovered(index)
  }

  const hideTrashIcon = () => {
    setHovered(-1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <TodoForm
        onSubmit={todoText => setTodos([{ content: todoText, done: false }, ...todos])}
      />
      <div className='todo-wrapper'>
        {todos.map(({ content, done }, index) => (
          <div
            className={done ? "todo-done" : "todo"}
            key={index}
            onClick={() => toggleDone(index)}
            onMouseEnter={() => showTrashIcon(index)}
            onMouseLeave={hideTrashIcon}
          >
            <i className={done ? "fa-regular fa-circle-check" : "fa-regular fa-circle"}></i>
            <span>{content}</span>
            <i className={hovered === index ? 'fa-solid fa-trash-can' : 'no-display'}></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
