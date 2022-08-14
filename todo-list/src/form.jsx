import React, { useState } from 'react';

const useInputValue = initialValue => {
  const [value, setValue] = useState("");

  return {
    value,
    onChange: event => setValue(event.target.value),
    resetValue: () => setValue("")
  }
}

export default function TodoForm ({onSubmit}) {
  const { resetValue, ...todoText } = useInputValue("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(todoText.value);
        resetValue();
      }}
    >
      <input className='todo-input' {...todoText} />
      <button type="submit">Add</button>
    </form>
  )
}
