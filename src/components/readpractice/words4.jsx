import React from "react";
import "./words.css";

const Words4 = props => {
  const { word1, word2, word3, word4 } = props;
  return (
    <div>
      <div className="text-center    startingWord"> {word1 + " " + word2}</div>
      <div className="text-center this-mid">• </div>
      <div className="text-center p-3  border-bottom border-secondary startingWord">
        {word3 + " " + word4}
      </div>
    </div>
  );
};

export default Words4;
