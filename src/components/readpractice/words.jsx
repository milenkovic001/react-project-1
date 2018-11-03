import React from "react";
import "./words.css";

const Words = props => {
  const { name } = props;
  return (
    <div className="text-center p-3 border-top border-bottom border-secondary startingWord">
      {name}
    </div>
  );
};

export default Words;
