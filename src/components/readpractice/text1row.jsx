import React, { Component } from "react";
import Words from "./words";
import TextData from "./textData";
import EnterValue from "./enterValue";

class Text1row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArray: "",
      text: "",
      word: "",
      textIndex: 0,
      textArrayIndex: 0,
      interval: 500,
      timer: 0,
      start: false,
      startPauseText: " Start "
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(e => this.changeText(e));
  }

  newStory = () => {
    fetch("http://localhost:3000/newStory")
      .then(res => res.json())
      .then(e => this.changeText(e));
  };

  changeText = text => {
    if (this.state.timer) clearInterval(this.state.timer);
    this.setState({ textArray: text.split(" "), text: text });
    this.restartValues();
    this.setTimer(this.state.interval);
  };

  setTimer = wordsPerMinute => {
    let textArrayLength = this.state.textArray.length;
    this.state.timer = setInterval(() => {
      if (textArrayLength > this.state.textArrayIndex && this.state.start) {
        this.setState({
          word: this.state.textArray[this.state.textArrayIndex]
        });
        this.markText();
        this.setState({
          textIndex: this.state.word.length + this.state.textIndex + 1,
          textArrayIndex: this.state.textArrayIndex + 1
        });
      } else if (textArrayLength <= this.state.textArrayIndex) {
        this.restartValues();
      }
    }, wordsPerMinute);
  };

  markText = () => {
    let { textIndex, text, word } = this.state,
      textLength = this.state.text.length,
      first,
      second,
      third,
      markedText = document.querySelector(".markedText");

    first = text.substring(textIndex, 0);
    third = text.substring(textLength, textIndex + word.length + 1);
    second = `<span style="background-color:#ADFF2F;"> ${word} </span>`;

    markedText.innerHTML = first + second + third;
  };

  startPauza = () => {
    if (this.state.start) {
      this.setState({ start: false, startPauseText: " Start" });
    } else {
      this.setState({ start: true, startPauseText: " Pauza" });
    }
  };

  restartValues = () => {
    this.state.textIndex = 0;
    this.state.textArrayIndex = 0;
    this.state.start = false;
    this.state.startPauseText = " Start";
    this.state.word = this.state.textArray[0];
    this.markText();
    this.setState({ word: this.state.textArray[0] });
  };

  speed = wordsPerMinuteValue => {
    let wordsPerMinuteInterval = 60000 / wordsPerMinuteValue;
    this.setState({
      start: false,
      startPauseText: "Start",
      interval: wordsPerMinuteInterval
    });
    clearInterval(this.state.timer);
    this.setTimer(wordsPerMinuteInterval);
  };

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div>
        <div>
          <Words name={this.state.word} />
          <TextData
            interval={this.state.interval}
            length={this.state.textArray.length}
          />
          <EnterValue
            startPauza={this.startPauza}
            startPauseText={this.state.startPauseText}
            restartValues={this.restartValues}
            speed={this.speed}
            newStory={this.newStory}
          />
          <div className="markedText" />
        </div>
      </div>
    );
  }
}

export default Text1row;
