import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [hovered, setHovered] = useState(-1);

  useEffect(() => {
    const data = localStorage.getItem('todo-list');
    if (data) setTodos(JSON.parse(data));
  }, [])

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos))
  }, [todos]);

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

  const deleteTodo = id => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log('newTodos: ', newTodos);
    setTodos(newTodos);
  }

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
        onSubmit=
        {todoText => {
          setTodos([{ id: uuidv4(), content: todoText, done: false }, ...todos])
        }}
      />
      <div className='todo-wrapper'>
        {todos.map((todo, index, id) => (
          <div
            className={todo.done ? "todo-done" : "todo"}
            key={todo.id}
            onMouseEnter={() => showTrashIcon(index)}
            onMouseLeave={hideTrashIcon}
          >
            <i
              className={todo.done ? "fa-regular fa-circle-check" : "fa-regular fa-circle"}
              onClick={() => toggleDone(index)}
            >
            </i>
            <span>{todo.content}</span>
            <i
              id={todo.id}
              className={hovered === index ? 'fa-solid fa-trash-can' : 'no-display'}
              onClick={() => deleteTodo(todo.id)}
            >
            </i>
          </div>
        ))}
      </div>

      <div className='footer-wrapper'>
        <div className='footer'>
          <span>?.. Tasks left</span>
          <div>
            <button className='all-button'>All</button>
            <button className='active-button'>Active</button>
            <button className='complete-button'>Complete</button>
          </div>
          <span>Clear Completed</span>
        </div>
      </div>

    </div>
  );
}

export default App;
