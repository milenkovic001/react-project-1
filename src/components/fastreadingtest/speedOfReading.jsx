import React, { Component } from "react";
import Measurer from "./measurer";
import "./speedOfReading.css";

class SpeedOfReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      minute: 0,
      start: false,
      startBtnValue: "start",
      timer: "",
      text: "",
      startVisibility: "visible"
    };
    this.setTimer();
  }

  setTimer = () => {
    setInterval(() => {
      if (this.state.start) {
        if (this.state.second >= 59)
          this.setState({ second: 0, minute: this.state.minute + 1 });
        else this.setState({ second: this.state.second + 1 });
      }
    }, 1000);
  };

  componentDidMount() {
    this.setStory();
  }

  setStory = () => {
    fetch("https://react-project-1-api.herokuapp.com/newStory")
      .then(res => res.json())
      .then(e => {
        this.setState({ text: e });
        document.querySelector(".text").innerHTML = e;
      })
      .then(
        this.setState({
          second: 0,
          minute: 0,
          start: false,
          startVisibility: "visible",
          finishedVisibility: "visible"
        })
      )
      .then((document.querySelector(".text").style.filter = "blur(1.6px)"));
  };

  second = () => {
    return ("0" + this.state.second).slice(-2);
  };

  minute = () => {
    return ("0" + this.state.minute).slice(-2);
  };

  startPause = () => {
    document.querySelector(".text").style.filter = "blur(0)";
    this.setState({ start: true, startVisibility: "hidden" });
  };

  wordsPerMinute = () => {
    this.setState({
      start: false,
      second: 0,
      minute: 0,
      finishedVisibility: "hidden"
    });
    let textLength = this.state.text.split(" ").length;
    let totalSeconds = this.state.second + 60 * this.state.minute;
    let speedOfReading = (textLength / totalSeconds) * 60;
    document.querySelector(
      ".text"
    ).innerHTML = `<h5> <p> Your speed is: ${speedOfReading.toFixed(
      1
    )} words in minut.</p> 
    <p>Text contained ${textLength} words.</p>
    <p>Your time was ${this.minute()}:${this.second()}</p>
    </h5>`;
  };

  render() {
    return (
      <div className=" centar-max-w">
        <Measurer
          minute={this.state.minute}
          second={this.state.second}
          startPause={this.startPause}
          setStory={this.setStory}
          goHome={this.props.goHome}
          startVisibility={this.state.startVisibility}
        />

        <div className="text blure" />
        <div className="endPage">
          <button
            className="btn btn-dark"
            onClick={this.wordsPerMinute}
            style={{ visibility: this.state.finishedVisibility }}
          >
            {" "}
            Finished
          </button>
        </div>
      </div>
    );
  }
}

export default SpeedOfReading;
