import React from "react";
import "./styles.css";

export default function Filterbar() {
  return (
    <nav className="navbar navbar-light bg-light" style={{ width: "75%" }}>
      <div className="selectFilters">
        <select className="form-control form-control-sm">
          <option>Small select</option>
          <option>Small select</option>
          <option>Small select</option>
          <option>Small select</option>
        </select>
        <select className="form-control form-control-sm">
          <option>Small select</option>
          <option>Small select</option>
          <option>Small select</option>
          <option>Small select</option>
        </select>
      </div>
    </nav>
  );
}
