import React from "react";
import "./words.css";

const Words2 = props => {
  const { word1, word2 } = props;
  return (
    //   <div>
    //    <div className="text-center    startingWord">{word1}</div>
    //    <div className="text-center p-3  border-bottom border-secondary startingWord">
    //       {word2}
    //    </div>
    //  </div>
    <div className="text-center p-3  border-bottom border-secondary startingWord">
      {word1 + " " + word2}
    </div>
  );
};

export default Words2;
