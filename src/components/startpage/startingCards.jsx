import React, { Component } from "react";
import "./startingCards.css";

const StartingCards = props => {
  const { fastPractice, fastTest, whyFastReading } = props;

  return (
    <div>
      <div className="box" onClick={fastPractice}>
        <h2 className="text-center ">Fast reading Practice</h2>
        <div className="karticaDiv">
          Incrase your reading speet up to 5 times. with simple technique and
          practice.
        </div>

        <div className="karticaDiv">
          This have the tool you need to help you become fast reader, and help
          you improve your periferi vision.
        </div>
      </div>

      <div className="box" onClick={fastTest}>
        <h2 className="text-center ">Fast reading test</h2>
        <div className="karticaDiv">
          Test how many words pre minut you can read.
        </div>
      </div>
      <div className="box" onClick={whyFastReading}>
        <h2 className="text-center ">Way do you need fast reading</h2>
        <div className="karticaDiv">
          Some of the reasons why you should lear fast reading
        </div>
      </div>
    </div>
  );
};

export default StartingCards;
