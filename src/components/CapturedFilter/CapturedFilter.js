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
        onChange={props.handleCapturedChange}
      >
        <option defaultValue="1"> All </option> <option> Captured </option>{" "}
        <option> Not Captured </option>{" "}
      </select>{" "}
    </div>
  );
}
