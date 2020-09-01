import React from "react";
import "./styles/App.css";
import PlayerGridContainer from "./Containers/playerGridContainer"

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <PlayerGridContainer/>
      </>
    );
  }
}
export default App;
