import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

export default function Cards({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    let flipTimeout;
    if (isFlipped) {
      flipTimeout = setTimeout(() => {
        setIsFlipped(false);
      }, 5000);
    }
    return () => clearTimeout(flipTimeout);
  }, [isFlipped]);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="card"
        style={{
          width: "20rem",
          height: "13.6rem",
          maxWidth: "20rem",
          maxHeight: "13.6rem",
          boxShadow:
            "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{
          width: "20rem",
          height: "13.6rem",
          maxWidth: "20rem",
          maxHeight: "13.6rem",
          boxShadow:
            "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </ReactCardFlip>
  );
}
