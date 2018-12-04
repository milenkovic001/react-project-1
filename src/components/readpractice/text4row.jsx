import React, { Component } from "react";
import Words4 from "./words4";
import TextData from "./textData";
import EnterValue from "./enterValue";
import Level from "./Level";

class Text4row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArray: "",
      text: "",
      word1: "",
      word2: "",
      word3: "",
      word4: "",
      howManyWords: 4,
      textIndex: 0,
      textArrayIndex: -4,
      interval: 500,
      timer: 0,
      start: false,
      startPauseText: " Start ",
      disableSpeedUp: false,
      disableSpeedDown: false
    };
  }
  componentDidMount() {
    fetch("https://react-project-1-api.herokuapp.com") //koristi ansyc
      // fetch("http://localhost:3000") //koristi ansyc
      .then(res => res.json())
      .then(e => this.changeText(e));
  }

  newStory = () => {
    fetch("https://react-project-1-api.herokuapp.com/newStory")
      // fetch("http://localhost:3000")
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
    this.state.timer = setInterval(() => {
      if (
        this.state.textArrayIndex < this.state.textArray.length &&
        this.state.start
      ) {
        this.setState({
          word1: this.state.textArray[this.state.textArrayIndex] || "",
          word2: this.state.textArray[this.state.textArrayIndex + 1] || "",
          word3: this.state.textArray[this.state.textArrayIndex + 2] || "",
          word4: this.state.textArray[this.state.textArrayIndex + 3] || ""
        });
        this.markText();
        this.setState({
          textIndex:
            this.state.word1.length +
            this.state.word2.length +
            this.state.word3.length +
            this.state.word4.length +
            this.state.textIndex +
            4,
          textArrayIndex: this.state.textArrayIndex + 4
        });
      } else if (this.state.textArrayIndex >= this.state.textArray.length) {
        this.restartValues();
      }
    }, wordsPerMinute);
  };

  markText = () => {
    let { textIndex, text } = this.state,
      textLength = this.state.text.length,
      first,
      second,
      third,
      localword1 = this.state.word1 || "",
      localword2 = this.state.word2 || "",
      localword3 = this.state.word3 || "",
      localword4 = this.state.word4 || "",
      markedText = document.querySelector(".markedText");

    first = text.substring(textIndex, 0);
    third = text.substring(
      textLength,
      textIndex +
        localword1.length +
        localword3.length +
        localword4.length +
        localword2.length +
        3
    );
    second = `<span style="background-color:#ADFF2F;"> ${localword1 +
      " " +
      localword2 +
      " " +
      localword3 +
      " " +
      localword4}  </span>`;

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
    this.state.word1 = this.state.textArray[0];
    this.state.word2 = this.state.textArray[1];
    this.state.word3 = this.state.textArray[2];
    this.state.word4 = this.state.textArray[3];
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
          <Words4
            word1={this.state.word1}
            word2={this.state.word2}
            word3={this.state.word3}
            word4={this.state.word4}
          />
          <div className="container">
            <div className="row">
              <div className="col-9">
                <TextData
                  howManyWords={this.state.howManyWords}
                  interval={this.state.interval}
                  length={this.state.textArray.length}
                />
              </div>
              <div className="col-3">
                <Level
                  level1={this.props.level1}
                  level2={this.props.level2}
                  level3={this.props.level3}
                />
              </div>
            </div>
          </div>
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
          <div className="markedText" />
        </div>
      </div>
    );
  }
}

export default Text4row;
