import React from "react";
import "./level.css";

const Level = props => {
  const { level1, level2, level3 } = props;

  return (
    <div className="contener this-right">
      <br />
      <div className="row ">
        <button className="this-btn btn btn-dark" onClick={level1}>
          level 1
        </button>
      </div>
      <div className="row ">
        <button className="this-btn btn btn-dark" onClick={level2}>
          level 2
        </button>
      </div>
      <div className="row ">
        <button className="this-btn btn btn-dark" onClick={level3}>
          level 3
        </button>
      </div>
    </div>
  );
};

export default Level;
