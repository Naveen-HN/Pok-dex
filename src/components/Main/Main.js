import React from "react";
import Cards from "../Cards/Cards";
import "./styles.css";

export default function Main(props) {
  return (
    <div className="cards-content">
      {" "}
      {props.data.map((item, index) => (
        <Cards
          data={item}
          key={index}
          handleToggleClick={props.handleToggleClick}
        />
      ))}{" "}
    </div>
  );
}
