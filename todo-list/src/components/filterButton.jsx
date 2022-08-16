import React from "react";
import * as $ from "../styles/styling";

export default function FilterButton(props) {
  return (
    <$.FilterButton
      type="button"
      className="filter-button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
    </$.FilterButton>
  );
}
