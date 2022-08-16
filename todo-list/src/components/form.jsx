import React, { useState } from "react";
import * as $ from "../styles/styling";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState("");

  return {
    value,
    onChange: (event) => setValue(event.target.value),
    resetValue: () => setValue(""),
  };
};

export default function TodoForm({ onSubmit }) {
  const { resetValue, ...todoText } = useInputValue("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(todoText.value);
        resetValue();
      }}
    >
      <$.TodoInput {...todoText} placeholder={"What's Todo?"} required />
      <$.AddButton type="submit">Submit</$.AddButton>
    </form>
  );
}
