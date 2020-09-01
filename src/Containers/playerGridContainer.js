import React, { Component } from 'react';
import "../styles/PlayerGridContainer.css";

class PlayerGridContainer extends Component {
  render(){
        return(
            <section id="playersContainer">
              <button id="formation">Formation</button>
              <input id="teamName" placeholder="Team Name"/>

              <p id="gk"> Kepa Arizabalaga</p>

              <p id="lb"> Ben Chilwell</p>
              <p id="cb1"> Antonio Rudiger</p>
              <p id="cb2"> Tiago Silva</p>
              <p id="rb"> Reece James</p>

              <p id="cm1"> Mateo Kovacic</p>
              <p id="cdm"> N'Golo Kante</p>
              <p id="cm2"> Mason Mount</p>

              <p id="rw"> Hakim Ziyech</p>
              <p id="st"> Timo Werner</p>
              <p id="lw"> Christian Pulisic</p>
            </section>
        )
    }
}

export default PlayerGridContainer;
