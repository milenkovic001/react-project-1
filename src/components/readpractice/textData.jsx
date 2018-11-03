import React from "react";

const TextData = props => {
  const { interval, length } = props;
  return (
    <div>
      <br />
      Words per minute {(60000 / interval).toFixed(2)}
      <br />
      Words pre second: {(1000 / interval).toFixed(2)} <br />
      The number of words in text: {length} <br />
      Time needed to read: {(length / (1000 / interval)).toFixed(
        2
      )} seconds <br /> <br /> <br />
    </div>
  );
};

export default TextData;