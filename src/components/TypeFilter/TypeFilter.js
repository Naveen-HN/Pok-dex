import React from "react";

export default function TypeFilter() {
  return (
    <div>
      <select
        className="form-control form-control-sm"
        style={{
          width: "100%",
        }}
      >
        <option defaultValue="1">Type</option>
        <option> Grass </option> <option> Fire </option>{" "}
        <option> Water </option> <option> Electric </option>{" "}
      </select>{" "}
    </div>
  );
}
