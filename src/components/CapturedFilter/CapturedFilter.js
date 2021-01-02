import React from "react";

export default function CapturedFilter() {
  return (
    <div>
      <select
        className="form-control form-control-sm"
        style={{
          width: "100%",
        }}
      >
        <option defaultValue="1"> All </option> <option> Captured </option>{" "}
        <option> Not Captured </option>{" "}
      </select>{" "}
    </div>
  );
}
