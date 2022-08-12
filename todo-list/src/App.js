import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [hovered, setHovered] = useState(-1);

  // these two useEffect hooks persist the application state via localStorage
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

  const showTrashIcon = (index) => {
    setHovered(index)
  }

  const hideTrashIcon = () => {
    setHovered(-1)
  }

  // DEBUG DELETE FUNCTIONALITY tomorrow!!!
  // --------------------------------------
  // new Array is filtering deleted item as intended,
  //  but... state array is not being updated

  // const handleDelete = ({ id }) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   console.log(newTodos);
  //   setTodos(newTodos);
  // }

  // const removeItem = id => {
  //   console.log('todos: ', todos);
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   console.log('newTodos: ', newTodos);
  //   setTodos(newTodos);
    // console.log(todos)
  // }

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
            onClick={() => toggleDone(index)}
            onMouseEnter={() => showTrashIcon(index)}
            onMouseLeave={hideTrashIcon}
          >
            <i className={todo.done ? "fa-regular fa-circle-check" : "fa-regular fa-circle"}></i>
            <span>{todo.content}</span>
            <i
              id={todo.id}
              className={hovered === index ? 'fa-solid fa-trash-can' : 'no-display'}
              // TRY using other arguments for function call*****
              // onClick={() => removeItem(todo.id)}
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
