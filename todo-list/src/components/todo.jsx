import React from "react";
import * as $ from "../styles/styling";

export default function Todo({
  todo,
  provided,
  snapshot,
  toggleDone,
  deleteTodo,
  tabIndex,
}) {
  return (
    <$.TodoItem
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      tabIndex="0"
      done={todo.done}
      key={todo.id}
      isDragging={snapshot.isDragging}
    >
      <i
        className={
          todo.done ? "fa-regular fa-circle-check" : "fa-regular fa-circle"
        }
        onClick={() => toggleDone(todo.id)}
        alt="status-circle-icon"
      ></i>
      <span onClick={() => toggleDone(todo.id)}>{todo.content}</span>
      <i
        id={todo.id}
        className={"fa-solid fa-trash-can"}
        onClick={() => deleteTodo(todo.id)}
        alt="delete-icon"
      ></i>
    </$.TodoItem>
  );
}
