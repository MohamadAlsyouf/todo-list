import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import FilterButton from "./components/filterButton";
import TodoForm from "./components/form";
import Todo from "./components/todo";
import "./styles/App.css";
import * as $ from "./styles/styling";

const filterMap = {
  all: () => true,
  active: (todo) => !todo.done,
  completed: (todo) => todo.done,
};

const filterNames = Object.keys(filterMap);

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const data = localStorage.getItem("todo-list");
    if (data) setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
    setTodoCount(todos.length);
  }, [todos]);

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const clearCompleted = (done) => {
    const activeTodos = todos.filter((todo) => todo.done !== true);
    setTodos(activeTodos);
  };

  const filterList = filterNames.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const onDragEnd = (result) => {
    const dragTodos = Array.from(todos);
    const [removed] = dragTodos.splice(result.source.index, 1);
    dragTodos.splice(result.destination.index, 0, removed);
    setTodos(dragTodos);
  };

  let isEmpty;
  if (todos.length === 0) {
    isEmpty = <span>Add a todo to start doing!</span>;
  } else {
    isEmpty = <span style={{ display: "none" }}></span>;
  }
  return (
    <>
      <$.AppWrapper>
        <$.AppHeader>
          <h1>Todo List</h1>
        </$.AppHeader>
        <TodoForm
          onSubmit={(todoText) => {
            setTodos([
              { id: uuidv4(), content: todoText, done: false },
              ...todos,
            ]);
          }}
        />
        <$.FilterWrapper>
          <$.FilterDiv>
            <span>{todoCount} tasks left</span>
            <div>{filterList}</div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => clearCompleted()}
            >
              clear completed
            </span>
          </$.FilterDiv>
        </$.FilterWrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <span style={{ display: "none" }}>{provided.placeholder}</span>
                <$.TodoWrapper>
                  {isEmpty}
                  {todos.filter(filterMap[filter]).map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                      tabIndex="0"
                    >
                      {(provided, snapshot) => (
                        <Todo
                          provided={provided}
                          snapshot={snapshot}
                          todo={todo}
                          toggleDone={toggleDone}
                          deleteTodo={deleteTodo}
                        />
                      )}
                    </Draggable>
                  ))}
                </$.TodoWrapper>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </$.AppWrapper>
    </>
  );
}
