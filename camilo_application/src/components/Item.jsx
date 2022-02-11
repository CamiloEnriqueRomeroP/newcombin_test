import React from "react";

export function Item({ array, toggleArray }) {
  const { fName, lName, snn } = array;

  const handleArrayClick = () => {
    toggleArray(snn);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleArrayClick} />
      {fName}
      {lName}
      {snn}
    </li>
  );
}