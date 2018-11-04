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
      startPauseText: " Start ",
      disableSpeedUp: false,
      disableSpeedDown: false
    };
  }
  componentDidMount() {
    fetch("https://react-project-1-api.herokuapp.com")
      .then(res => res.json())
      .then(e => this.changeText(e));
  }

  newStory = () => {
    fetch("https://react-project-1-api.herokuapp.com/newStory")
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

  speedUp = () => {
    let wordsPerMinute = 60000 / this.state.interval;
    wordsPerMinute += 20;
    let newInterval = 60000 / wordsPerMinute;
    this.setState({ interval: newInterval });
    clearInterval(this.state.timer);
    this.setTimer(newInterval);
    if (wordsPerMinute >= 890) this.setState({ disableSpeedUp: true });
    if (this.state.disableSpeedDown && wordsPerMinute >= 30)
      this.setState({ disableSpeedDown: false });
  };

  speedDown = () => {
    let wordsPerMinute = 60000 / this.state.interval;
    wordsPerMinute -= 20;
    let newInterval = 60000 / wordsPerMinute;
    this.setState({ interval: newInterval });
    clearInterval(this.state.timer);
    this.setTimer(newInterval);
    if (wordsPerMinute <= 30) this.setState({ disableSpeedDown: true });
    if (this.state.disableSpeedUp && wordsPerMinute <= 890)
      this.setState({ disableSpeedUp: false });
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
            newStory={this.newStory}
            speedUp={this.speedUp}
            speedDown={this.speedDown}
            disableSpeedUp={this.state.disableSpeedUp}
            disableSpeedDown={this.state.disableSpeedDown}
          />
          <div className="markedText p-2" />
        </div>
      </div>
    );
  }
}

export default Text1row;
