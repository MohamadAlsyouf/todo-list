import React, { useState } from 'react';

export default function Todo(props) {
  const [hovered, setHovered] = useState(-1);

  const showTrashIcon = (id) => {
    setHovered(id)
  }

  const hideTrashIcon = () => {
    setHovered(-1)
  }

  return (
    <div
      className={props.done ? "todo-done" : "todo"}
      key={props.id}
      onMouseEnter={() => showTrashIcon(props.id)}
      onMouseLeave={hideTrashIcon}
    >
      <i
        className={props.done ? "fa-regular fa-circle-check" : "fa-regular fa-circle"}
        onClick={() => props.toggleDone(props.id)}
      >
      </i>
      <span
        onClick={() => props.toggleDone(props.id)}
      >
        {props.content}
      </span>
      <i
        id={props.id}
        className={hovered === props.id ? 'fa-solid fa-trash-can' : 'no-display'}
        onClick={() => props.deleteTodo(props.id)}
      >
      </i>
    </div>
  )
}
