import React from "react";
import "./speedOfReading.css";

const Measurer = props => {
  const { minute, second, startPause, setStory, goHome } = props;

  return (
    <div className="topPage">
      <div>
        {("0" + minute).slice(-2)}:{("0" + second).slice(-2)}
        <button className="this-btn btn btn-dark" onClick={setStory}>
          New story
        </button>
        <button className="this-btn btn btn-dark" onClick={startPause}>
          Start
        </button>
        <button className="this-btn btn btn-dark home-btn" onClick={goHome}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Measurer;
