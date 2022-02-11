import React from "react";
import { Item } from "./Item";

export function List({ arrays, toggleArray }) {
  return (
    <ul>
      {arrays.map((array) => (
        <Item key={array.snn} array={array} toggleArray={toggleArray} />
      ))}
    </ul>
  );
}