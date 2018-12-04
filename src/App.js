import React, { Component } from "react";
import "./App.css";
import Text1row from "./components/readpractice/text1row";
import Text2row from "./components/readpractice/text2row";
import Text4row from "./components/readpractice/text4row";
import WhyAndHowFastReading from "./components/whyAndHow/whyAndHowFastReading";
import Particles from "react-particles-js";
import SpeedOfReading from "./components/fastreadingtest/speedOfReading";
import Navigation from "./components/nav/navigation";
import StartingCards from "./components/startpage/startingCards";

const particalkOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 641.3648243462092
      }
    },
    color: {
      value: "#444444"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 110.28971028971029,
        size_min: 27.172827172827173,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#666666",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 8.017060304327615,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 801.7060304327614,
        rotateY: 1362.9002517356944
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 499.4274855653273,
        size: 85.26810729164123,
        duration: 3.0046856855149766,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 300.4685685514977,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}; //export from different file

class App extends Component {
  constructor() {
    super();
    this.state = {
      root: "5"
    };
    if (window.innerWidth < 500) particalkOptions.particles.number.value = 30;
  }

  goHome = () => {
    this.setState({ root: "0" });
  };

  fastPractice = () => {
    this.setState({ root: "1" });
  };

  fastTest = () => {
    this.setState({ root: "2" });
  };

  whyFastReading = () => {
    this.setState({ root: "3" });
  };

  level1 = () => {
    if (this.state.root !== 1) this.fastPractice();
  };

  level2 = () => {
    if (this.state.root !== 4) this.setState({ root: "4" });
  };

  level3 = () => {
    if (this.state.root !== 5) this.setState({ root: "5" });
  };

  render() {
    return (
      <div>
        {(() => {
          switch (this.state.root) {
            case "0":
              return (
                <div>
                  <Navigation goHome={this.goHome} />
                  <Particles className="particles" params={particalkOptions} />
                  <StartingCards
                    fastPractice={this.fastPractice}
                    fastTest={this.fastTest}
                    whyFastReading={this.whyFastReading}
                  />
                </div>
              );
            case "1":
              return (
                <div>
                  <Navigation goHome={this.goHome} />
                  <div className="centar-max-w">
                    <Text1row
                      level1={this.level1}
                      level2={this.level2}
                      level3={this.level3}
                    />
                  </div>
                </div>
              );
            case "2":
              return (
                <div>
                  <SpeedOfReading goHome={this.goHome} />
                </div>
              );
            case "3":
              return (
                <div>
                  <Navigation goHome={this.goHome} />
                  <WhyAndHowFastReading />
                </div>
              );
            case "4":
              return (
                <div>
                  <Navigation goHome={this.goHome} />
                  <div className="centar-max-w">
                    <Text2row
                      level1={this.level1}
                      level2={this.level2}
                      level3={this.level3}
                    />
                  </div>
                </div>
              );
            case "5":
              return (
                <div>
                  <Navigation goHome={this.goHome} />
                  <div className="centar-max-w">
                    <Text4row
                      level1={this.level1}
                      level2={this.level2}
                      level3={this.level3}
                    />
                  </div>
                </div>
              );
            default:
            // return (
            //   <div>
            //     <Navigation goHome={this.goHome} />
            //     <Particles className="particles" params={particalkOptions} />
            //     <PocetnaKartica
            //       fastPractice={this.fastPractice}
            //       fastTest={this.fastTest}
            //     />
            //   </div>
            // );
          }
        })()}
      </div>
    );
  }
}

export default App;
