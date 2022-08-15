import React, { useState, useEffect } from 'react';
import TodoForm from './components/form';
import FilterButton from './components/filterButton';
import Todo from './components/todo';
import { v4 as uuidv4 } from 'uuid';
import './styles/App.css';
import * as $ from './styles/styling';

const filterMap = {
  all: () => true,
  active: (todo) => !todo.done,
  completed: (todo) => todo.done
}

const filterNames = Object.keys(filterMap);

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const data = localStorage.getItem('todo-list');
    if (data) setTodos(JSON.parse(data));
  }, [])

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos))
    setTodoCount(todos.length);
  }, [todos]);

  const toggleDone = id => {
    setTodos(todos.map((todo) =>
      id === todo.id
        ? {
          ...todo,
          done: !todo.done
          }
        : todo
    ))
  }

  const deleteTodo = id => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const clearCompleted = done => {
    const activeTodos = todos.filter((todo) => todo.done !== true)
    setTodos(activeTodos)
  }

  const todoList = todos
  .filter(filterMap[filter])
  .map(todo => (
    <Todo
      id={todo.id}
      content={todo.content}
      done={todo.done}
      key={todo.id}
      toggleDone={toggleDone}
      deleteTodo={deleteTodo}
    />
  ))

  const filterList = filterNames.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  return (
    <$.AppWrapper>
      <$.AppHeader>
        <h1>Todo List</h1>
      </$.AppHeader>
      <TodoForm
        onSubmit=
        {todoText => {
          setTodos([{ id: uuidv4(), content: todoText, done: false }, ...todos])
        }}
      />
      <$.TodoWrapper>
        {todoList}
      </$.TodoWrapper>
      <$.FooterWrapper>
        <$.Footer>
          <span>{todoCount} tasks left</span>
          <div>
            {filterList}
          </div>
          <span className='clear-completed' onClick={() => clearCompleted()}>clear completed</span>
        </$.Footer>
      </$.FooterWrapper>
    </$.AppWrapper>
  );
}
