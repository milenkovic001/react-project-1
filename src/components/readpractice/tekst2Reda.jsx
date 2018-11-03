import React, { Component } from "react";
import tk from "./text2.txt";
import { setInterval } from "timers";
import "./tekst2Reda.css";

class Tekst2Reda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tekstArrey: "",
      tekst: "",
      rec1: "",
      rec2: "",
      index: 0,
      interval: 50,
      tajmer: ""
    };

    fetch(tk)
      .then(r => r.text())
      .then(t => {
        this.setState({ tekstArrey: t.split(" ") });
        this.state.tekst = t;
      })
      .then(this.recPoRec);
  }

  recPoRec = () => {
    let i = -2,
      j = -1,
      duzina = this.state.tekstArrey.length;
    this.state.tajmer = setInterval(() => {
      if (duzina > i + 2) this.promeni((i += 2), (j += 2));
      else clearInterval(this.state.tajmer);
    }, this.state.interval);
  };

  promeni = (a, b) => {
    let pom1 = this.state.tekstArrey[a] || "",
      pom2 = this.state.tekstArrey[b] || "";

    this.setState({ rec1: this.state.tekstArrey[a] });
    this.setState({ rec2: this.state.tekstArrey[b] });
    this.oznaci(pom1, pom2);
    this.setState({
      index: pom1.length + pom2.length + this.state.index + 2
    });
  };

  oznaci = (prva, druga) => {
    let { index, tekst } = this.state,
      duzina = this.state.tekst.length,
      prvi,
      drugi,
      treci,
      a = document.getElementById("1");

    prvi = tekst.substring(index, 0);
    treci = tekst.substring(duzina, index + prva.length + druga.length + 1);
    drugi = `<span style="background-color:yellow;"> ${prva +
      " " +
      druga} </span>`;

    a.innerHTML = prvi + drugi + treci;
  };

  render() {
    return (
      <div>
        <div className="text-center"> {this.state.rec1}</div>
        <div className="malo">•</div>
        <div className="text-center"> {this.state.rec2}</div>
        <div>
          <br />
          Broj reci u minut je {(60000 / this.state.interval).toFixed(2)}
          <br />
          Broj reci u sekundi: {(1000 / this.state.interval).toFixed(2)} <br />
          Broj reci u tekstu je :{this.state.tekstArrey.length} <br />
          Vreme potrebno za citanje :
          {(
            this.state.tekstArrey.length /
            (1000 / this.state.interval)
          ).toFixed(2)}{" "}
          sekundi <br />
          <br /> <br />
        </div>
        <div id="1">{this.state.tekst}</div>
      </div>
    );
  }
}

export default Tekst2Reda;

/*  oznaci = (promeni1, promeni2) => {
let a = document.getElementById("1");
pomocni = pomocni.replace(
  promeni,
  `<span style="background-color:yellow;"> ${promeni}</span>`
);
a.innerHTML = pomocni;
*/
