import React from "react";

export default function CapturedFilter(props) {
  return (
    <div>
      <select
        className="form-control form-control-sm"
        label="Captured"
        style={{
          width: "100%",
        }}
        onChange={(e) => props.handleCapturedChange(e)}
      >
        <option defaultValue="1" value="All">
          {" "}
          All{" "}
        </option>{" "}
        <option value="Captured"> Captured </option>{" "}
        <option value="Not Captured"> Not Captured </option>{" "}
      </select>{" "}
    </div>
  );
}
