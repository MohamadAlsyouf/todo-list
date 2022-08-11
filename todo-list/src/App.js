import React, { useState } from 'react';
import './App.css';
import TodoForm from './todo';

function App() {
  const [todos, setTodos] = useState([]);

  // const toggleDone = index => {

  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <TodoForm
        onSubmit={todoText => setTodos([{ content: todoText, done: false }, ...todos])}
      />
      <div className='todo-wrapper'>
        {todos.map(({ content }) => (
          <div className='todo' key={content}>{content}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
