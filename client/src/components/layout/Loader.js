import React from "react";
import Cube from "./Cube";

const Spinner = () => {
  return (
    <div className="loader">
      <Cube />
      <h2 className="loading-text">Loading...</h2>
    </div>
  );
};

export default Spinner;
