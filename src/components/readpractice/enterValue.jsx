import React from "react";

const EnterValue = props => {
  const { startPauza, startPauseText, restartValues, speed, newStory } = props;

  return (
    <div>
      <button onClick={startPauza}> {startPauseText} </button>
      <button onClick={restartValues}> Restart </button>
      <input
        type="text"
        onChange={e => speed(e.target.value)}
        placeholder="reci u minutu"
      />
      <button onClick={newStory}>Random prica</button>
      <br />
    </div>
  );
};

export default EnterValue;
