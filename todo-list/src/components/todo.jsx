import React, { useState } from "react";
import * as $ from "../styles/styling";

export default function Todo({
  todo,
  provided,
  snapshot,
  toggleDone,
  deleteTodo,
}) {
  const [hovered, setHovered] = useState(-1);

  const showTrashIcon = (id) => {
    setHovered(id);
  };

  const hideTrashIcon = () => {
    setHovered(-1);
  };

  return (
    <$.TodoItem
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      done={todo.done}
      key={todo.id}
      tabIndex={todo.tabIndex}
      onMouseEnter={() => showTrashIcon(todo.id)}
      onMouseLeave={hideTrashIcon}
    >
      <i
        className={
          todo.done ? "fa-regular fa-circle-check" : "fa-regular fa-circle"
        }
        onClick={() => toggleDone(todo.id)}
      ></i>
      <span onClick={() => toggleDone(todo.id)}>{todo.content}</span>
      <i
        id={todo.id}
        className={hovered === todo.id ? "fa-solid fa-trash-can" : "no-display"}
        onClick={() => deleteTodo(todo.id)}
      ></i>
    </$.TodoItem>
  );
}
