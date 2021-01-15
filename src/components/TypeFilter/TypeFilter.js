import React, { useState, useEffect } from "react";

export default function TypeFilter(props) {
  const [types, setTypes] = useState([
    "All",
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water",
  ]);

  return (
    <div>
      <select
        className="form-control form-control-sm"
        style={{
          width: "100%",
        }}
        onChange={(e) => props.handleTypeChange(e)}
      >
        {" "}
        {types.map((item, index) => (
          <option value={item} key={index}>
            {" "}
            {item}{" "}
          </option>
        ))}{" "}
      </select>{" "}
    </div>
  );
}
