import React, { Component } from "react";
import "./whyAndHowFastReading.css";

class WhyAndHowFastReading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=" centar-max-w">
        {" "}
        <h1 className="text-center">Brzo čitanje</h1>
        <br />
        <h3 className="text-center">Cilj</h3>
        <ul>
          <li>Da vam boboljša brzinu citanja</li>
          <li>Da vam ustedi vreme</li>
          <li>Da vam boboljša brzinu ucenja</li>
        </ul>
        <p className="text-danger">
          potsetnik 2: napravi i da racunuaju koliko brzo citaju u minutu
        </p>
        <p className="text-danger">napravi pocentu stranu sa kraticama</p>
        <p>
          Koriscenje ovog programa moze da vam pomogne da citate i preko 100
          stranica za jedan sat
        </p>
        <p> ovde kako oci spore se pokrecu</p>
        <p>ove kako setaju u recenic</p>
        <p>
          ako imas fiksnu tacku mozes mnogo brzo i ovde sa leve strvane mozes da
          izracunas koliko je brze i koliko ces da ubrzas ako imas dve- tri
          fiksne tacke u recenici
        </p>
        <p>ovde kako ovo moze da ti pomogne da ubrzas cinje i razumevalje</p>
        <p>
          kao sledeci nivoi ili nove vezbe po dve recenice u ili dve recenice u
          razliciti red ili po dve recenice u dva reda dok se fokusiras u centar
          i pokusas da razumes sta koja recenica znaci
        </p>
      </div>
    );
  }
}

export default WhyAndHowFastReading;
