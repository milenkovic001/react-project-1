import React from "react";
import "./enterValue.css";

const EnterValue = props => {
  const {
    startPauza,
    startPauseText,
    restartValues,
    newStory,
    speedUp,
    speedDown,
    disableSpeedUp,
    disableSpeedDown
  } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col mb-1">
          <button className="this-btn-l btn btn-dark" onClick={startPauza}>
            {startPauseText}
          </button>
          <button className="this-btn-l btn btn-dark" onClick={restartValues}>
            Restart
          </button>
          <button
            className="this-btn-r btn btn-dark"
            onClick={speedUp}
            disabled={disableSpeedUp}
          >
            Speed up
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button className="this-btn-l btn btn-dark" onClick={newStory}>
            Random story
          </button>
          <button
            className="this-btn-r btn btn-dark"
            onClick={speedDown}
            disabled={disableSpeedDown}
          >
            Speed down
          </button>
        </div>
      </div>

      <br />
    </div>
  );
};

export default EnterValue;
